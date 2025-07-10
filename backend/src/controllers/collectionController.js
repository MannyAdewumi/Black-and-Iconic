import Collection from '../models/Collection.model.js';

// 1. Create a collection
export const createCollection = async (req, res) => {
  const { title, description, images, isPublic } = req.body;

  try {
    const collection = await Collection.create({
      title,
      description,
      images,
      isPublic,
      createdBy: req.user._id,
    });

    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create collection', error });
  }
};

// 2. Get all collections by a user
export const getCollectionsByUser = async (req, res) => {
  try {
    const collections = await Collection.find({ createdBy: req.params.userId }).populate('images');
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch collections', error });
  }
};

// 3. Get a single collection by ID
export const getCollectionById = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).populate('images');

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    res.json(collection);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch collection', error });
  }
};

// 4. Update a collection
export const updateCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) return res.status(404).json({ message: 'Not found' });

    if (collection.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updates = req.body;
    const updated = await Collection.findByIdAndUpdate(req.params.id, updates, { new: true });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update collection', error });
  }
};

// 5. Delete a collection
export const deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) return res.status(404).json({ message: 'Not found' });

    if (collection.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await collection.remove();
    res.json({ message: 'Collection deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete collection', error });
  }
};
