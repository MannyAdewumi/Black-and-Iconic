import Image from '../models/Image.model.js';
import cloudinary from '../utils/cloudinary.js';

export const uploadImage = async (req, res) => {
  const { title, description, tags, category } = req.body;

  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: 'blackandiconic',
    resource_type: 'image',
  });

  const image = await Image.create({
    title,
    description,
    tags,
    category,
    url: result.secure_url,
    uploadedBy: req.user._id,
  });

  res.status(201).json(image);
};

export const getAllImages = async (req, res) => {
  const images = await Image.find().populate('uploadedBy', 'name');
  res.json(images);
};

export const getImageById = async (req, res) => {
  const image = await Image.findById(req.params.id).populate('uploadedBy', 'name');
  if (!image) return res.status(404).json({ message: 'Not found' });
  res.json(image);
};

export const deleteImage = async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).json({ message: 'Not found' });

  if (image.uploadedBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Not allowed' });
  }

  await image.remove();
  res.json({ message: 'Deleted' });
};

export const toggleLike = async (req, res) => {
  const image = await Image.findById(req.params.id);
  const userId = req.user._id.toString();

  if (image.likes.includes(userId)) {
    image.likes = image.likes.filter((id) => id.toString() !== userId);
  } else {
    image.likes.push(userId);
  }

  await image.save();
  res.json(image);
};

export const toggleSave = async (req, res) => {
  const user = await User.findById(req.user._id);
  const imageId = req.params.id;

  if (user.savedImages.includes(imageId)) {
    user.savedImages = user.savedImages.filter((id) => id.toString() !== imageId);
  } else {
    user.savedImages.push(imageId);
  }

  await user.save();
  res.json(user.savedImages);
};
