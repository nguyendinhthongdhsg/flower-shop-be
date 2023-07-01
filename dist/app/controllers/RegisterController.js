"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class RegisterController {
    post(req, res, next) {
        const formReq = req.body.data;
        User_1.default.findOne({ email: formReq.email })
            .then((userFind) => {
            if (userFind === null || userFind === void 0 ? void 0 : userFind.email)
                res.json({ error: 'Email này đã được đăng ký!' });
            else {
                const userDB = new User_1.default(formReq);
                if (userDB.password) {
                    userDB.password = userDB.encryptPassword(userDB.password);
                }
                userDB
                    .save()
                    .then(() => res.json({ success: true }))
                    .catch(next);
            }
        })
            .catch(next);
    }
}
exports.default = new RegisterController();
