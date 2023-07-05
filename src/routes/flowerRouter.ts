import express from 'express';
const router = express.Router();
import flowerController from '../app/controllers/FlowerController';
import upload from '../utils/upload';

router.post('/', upload.single('file'), flowerController.post);
router.get('/', flowerController.get);
router.delete('/', flowerController.delete);

export default router;
