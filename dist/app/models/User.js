"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Schema = mongoose_1.default.Schema;
const User = new Schema({
    name: { type: String, require: true },
    image: { type: String },
    email: { type: String, require: true },
    password: { type: String },
    admin: { type: Boolean },
}, {
    timestamps: true,
});
User.methods.encryptPassword = function (password) {
    return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(5));
};
User.methods.validPassword = function (password) {
    return bcrypt_1.default.compareSync(password, this.password);
};
exports.default = mongoose_1.default.model('User', User);
//# sourceMappingURL=User.js.map