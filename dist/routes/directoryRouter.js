"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const DirectoryController_1 = __importDefault(require("../app/controllers/DirectoryController"));
router.post('/', DirectoryController_1.default.post);
router.get('/', DirectoryController_1.default.get);
router.delete('/', DirectoryController_1.default.delete);
exports.default = router;
