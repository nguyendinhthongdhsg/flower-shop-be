import express from 'express';
const router = express.Router();
import imageController from '../app/controllers/ImageController';

router.get('/', imageController.get);

export default router;
