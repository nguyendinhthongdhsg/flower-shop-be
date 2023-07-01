"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./userRouter"));
const directoryRouter_1 = __importDefault(require("./directoryRouter"));
function routes(app) {
    app.use('/user', userRouter_1.default);
    app.use('/directory', directoryRouter_1.default);
}
exports.default = routes;
