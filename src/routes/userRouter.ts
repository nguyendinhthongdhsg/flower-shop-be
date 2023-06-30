import express from 'express';
const router = express.Router();

import loginController from '../app/controllers/LoginController';
import registerController from '../app/controllers/RegisterController';

router.post('/loginWithSocal', loginController.loginWithSocal);
router.post('/loginWithEmail', loginController.loginWithEmail);
router.post('/loginWithAdmin', loginController.loginWithAdmin);
router.post('/register', registerController.post);

export default router;
