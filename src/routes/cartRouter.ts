import express from 'express';
const router = express.Router();
import cartController from '../app/controllers/CartController';

router.get('/', cartController.get);
router.post('/', cartController.post);
router.put('/', cartController.put);
router.delete('/', cartController.delete);

export default router;
