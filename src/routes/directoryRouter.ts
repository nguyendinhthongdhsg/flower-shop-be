import express from 'express';
const router = express.Router();
import directoryController from '../app/controllers/DirectoryController';

router.post('/', directoryController.post);
router.get('/', directoryController.get);
router.delete('/', directoryController.delete);

export default router;
