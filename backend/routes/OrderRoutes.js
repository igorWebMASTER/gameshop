import express from 'express';
const router = express.Router();
import { addOrderItems } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);

export default router;
