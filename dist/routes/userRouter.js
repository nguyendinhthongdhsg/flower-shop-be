"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const LoginController_1 = __importDefault(require("../app/controllers/LoginController"));
const RegisterController_1 = __importDefault(require("../app/controllers/RegisterController"));
router.post('/loginWithSocal', LoginController_1.default.loginWithSocal);
router.post('/loginWithEmail', LoginController_1.default.loginWithEmail);
router.post('/loginWithAdmin', LoginController_1.default.loginWithAdmin);
router.post('/register', RegisterController_1.default.post);
exports.default = router;
//# sourceMappingURL=userRouter.js.map