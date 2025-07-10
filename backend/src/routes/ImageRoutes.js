import express from 'express';
import {
  uploadImage,
  getAllImages,
  getImageById,
  deleteImage,
  toggleLike,
  toggleSave,
} from '../controllers/imageController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/', protect, upload.single, uploadImage);
router.get('/', getAllImages);
router.get('/:id', getImageById);
router.delete('/:id', protect, deleteImage);
router.put('/:id/like', protect, toggleLike);
router.put('/:id/save', protect, toggleSave);

export default router;
