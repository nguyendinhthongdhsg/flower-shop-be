"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../models/Directory"));
class DirectoryController {
    post(req, res, next) {
        const dirReq = req.body.directory;
        Directory_1.default.findOne({ name: dirReq.name })
            .then((dirFind) => {
            if (dirFind === null || dirFind === void 0 ? void 0 : dirFind.name) {
                res.json({ error: 'Danh mục này đã tồn tại' });
            }
            else {
                Directory_1.default.findOne({ id: dirReq.id })
                    .then((dirFind1) => {
                    if (dirFind1 === null || dirFind1 === void 0 ? void 0 : dirFind1.id) {
                        res.json({ error: 'ID này đã tồn tại' });
                    }
                    else {
                        const dirDB = new Directory_1.default(dirReq);
                        dirDB
                            .save()
                            .then(() => res.json({ success: true }))
                            .catch(next);
                    }
                })
                    .catch(next);
            }
        })
            .catch(next);
    }
    get(req, res, next) {
        Directory_1.default.find({})
            .then((dirFind) => res.json(dirFind))
            .catch(next);
    }
    delete(req, res, next) {
        Directory_1.default.deleteOne({ id: req.body.id })
            .then(() => {
            res.json({ success: true });
        })
            .catch(() => res.json({ error: true }));
    }
}
exports.default = new DirectoryController();
