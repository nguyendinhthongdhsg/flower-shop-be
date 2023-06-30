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
                    const dirDB = new Directory(dirReq);
                    dirDB
                        .save()
                        .then(() => res.json({ success: true }))
                        .catch(next);
                }
            })
            .catch(next);
    }

    get(req: Request, res: Response, next: NextFunction) {
        Directory.find({})
            .then((dirFind) => res.json(dirFind))
            .catch(next);
    }
}

export default new DirectoryController();
