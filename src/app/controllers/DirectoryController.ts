import { NextFunction, Request, Response } from 'express';
import Directory from '../models/Directory';

class DirectoryController {
    post(req: Request, res: Response, next: NextFunction) {
        const dirReq = req.body.directory;
        Directory.findOne({ name: dirReq.name })
            .then((dirFind) => {
                if (dirFind?.name) {
                    res.json({ error: 'Danh mục này đã tồn tại' });
                } else {
                    Directory.findOne({ id: dirReq.id })
                        .then((dirFind1) => {
                            if (dirFind1?.id) {
                                res.json({ error: 'ID này đã tồn tại' });
                            } else {
                                const dirDB = new Directory(dirReq);
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

    get(req: Request, res: Response, next: NextFunction) {
        Directory.find({})
            .then((dirFind) => {
                console.log(dirFind);
                res.json(dirFind);
            })
            .catch(next);
    }

    delete(req: Request, res: Response, next: NextFunction) {
        Directory.deleteOne({ id: req.body.id })
            .then(() => {
                res.json({ success: true });
            })
            .catch(() => res.json({ error: true }));
    }
}

export default new DirectoryController();
