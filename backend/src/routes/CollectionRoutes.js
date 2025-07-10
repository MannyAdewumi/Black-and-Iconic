import express from 'express';
import {
  createCollection,
  getCollectionsByUser,
  getCollectionById,
  updateCollection,
  deleteCollection,
} from '../controllers/collectionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createCollection);
router.get('/user/:userId', getCollectionsByUser);
router.get('/:id', getCollectionById);
router.put('/:id', protect, updateCollection);
router.delete('/:id', protect, deleteCollection);

export default router;
