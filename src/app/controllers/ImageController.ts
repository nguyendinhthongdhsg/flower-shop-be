import { NextFunction, Request, Response } from 'express';
import Image from '../models/Image';

class ImageController {
    get(req: Request, res: Response, next: NextFunction) {
        Image.findOne({ id: req.query.q })
            .then((imageFind) => {
                if (imageFind && imageFind.data && imageFind.contentType) {
                    res.setHeader('Content-Type', imageFind.contentType);
                    res.send(imageFind?.data);
                }
            })
            .catch(next);
    }
}

export default new ImageController();
