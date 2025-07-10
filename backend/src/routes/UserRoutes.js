import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getMe,
  getUserById,
  updateUser,
  getSavedImages,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/me', protect, getMe);
router.get('/:id', getUserById);
router.put('/:id', protect, updateUser);
router.get('/:id/saved', protect, getSavedImages);

export default router;
