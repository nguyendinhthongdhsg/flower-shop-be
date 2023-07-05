import { NextFunction, Request, Response } from 'express';
import Flower from '../models/Flower';
import Image from '../models/Image';

class FlowerController {
    post(req: Request, res: Response, next: NextFunction) {
        const formReq = {
            name: req.body.name,
            price: Number(req.body.price),
            id: req.body.id,
        };
        const fileReq = {
            id: req.body.id,
            data: req.file?.buffer,
            contentType: req.file?.mimetype,
        };
        Flower.findOne({ name: formReq.name })
            .then((flowerFind) => {
                if (flowerFind?.name) {
                    res.json({ error: 'Tên sản phẩm đã tồn tại' });
                } else {
                    Flower.findOne({ id: formReq.id })
                        .then((flowerFind1) => {
                            if (flowerFind1?.id) {
                                res.json({ error: 'ID sản phẩm đã tồn tại' });
                            } else {
                                const formDB = new Flower(formReq);
                                const imageDB = new Image(fileReq);
                                formDB
                                    .save()
                                    .then(() => {
                                        imageDB
                                            .save()
                                            .then(() => res.json({ success: true }))
                                            .catch(next);
                                    })
                                    .catch(next);
                            }
                        })
                        .catch(next);
                }
            })
            .catch(next);
    }

    get(req: Request, res: Response, next: NextFunction) {
        Flower.find({})
            .then((flowerFind) => res.json(flowerFind))
            .catch(next);
    }

    delete(req: Request, res: Response, next: NextFunction) {
        Flower.deleteOne({ id: req.body.id })
            .then(() => {
                Image.deleteOne({ id: req.body.id })
                    .then(() => res.json({ success: true }))
                    .catch(() => res.json({ error: true }));
            })
            .catch(() => res.json({ error: true }));
    }
}

export default new FlowerController();
