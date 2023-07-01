"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class LoginController {
    loginWithSocal(req, res, next) {
        const userReq = req.body.user;
        User_1.default.findOne({ email: userReq.email })
            .then((userFind) => {
            if (userFind === null || userFind === void 0 ? void 0 : userFind.name)
                res.sendStatus(200);
            else {
                const userDB = new User_1.default(userReq);
                userDB
                    .save()
                    .then(() => res.sendStatus(200))
                    .catch(next);
            }
        })
            .catch(next);
    }
    loginWithEmail(req, res, next) {
        const formReq = req.body.data;
        User_1.default.findOne({ email: formReq.email })
            .then((userFind) => {
            if ((userFind === null || userFind === void 0 ? void 0 : userFind.name) &&
                (userFind === null || userFind === void 0 ? void 0 : userFind.password) &&
                (userFind === null || userFind === void 0 ? void 0 : userFind.validPassword(formReq.password))) {
                const userRes = userFind;
                delete userRes['password'];
                res.json(userRes);
            }
            else {
                res.json({ error: true });
            }
        })
            .catch(() => res.json({ error: true }));
    }
    loginWithAdmin(req, res, next) {
        const userReq = req.body.user;
        User_1.default.findOne({ email: userReq.email })
            .then((userFind) => {
            if (userFind === null || userFind === void 0 ? void 0 : userFind.admin) {
                res.json(true);
            }
            else {
                res.json(false);
            }
        })
            .catch(next);
    }
}
exports.default = new LoginController();
//# sourceMappingURL=LoginController.js.map