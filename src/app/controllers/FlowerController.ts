import { NextFunction, Request, Response } from 'express';
import Flower from '../models/Flower';
import Image from '../models/Image';
import Directory from '../models/Directory';

class FlowerController {
    post(req: Request, res: Response, next: NextFunction) {
        const formReq = {
            name: req.body.name,
            price: Number(req.body.price),
            id: req.body.id,
            directory: '',
        };
        if (formReq.id.indexOf(' ') === -1) {
            res.json({
                error: `ID sản phẩm phải chứa mã ID danh mục và ID sản phẩm (VD: ${formReq.id} 01)`,
            });
        } else {
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
                                    let checkDir = '';
                                    const stringId = formReq.id;
                                    const length = stringId.length;
                                    let i = 0;
                                    while (stringId) {
                                        if (stringId[i] === ' ' || i === length) break;
                                        checkDir += stringId[i];
                                        i++;
                                    }
                                    Directory.findOne({ id: checkDir })
                                        .then((dirFind) => {
                                            if (dirFind?.name) {
                                                formReq.directory = checkDir;
                                                const formDB = new Flower(formReq);
                                                const imageDB = new Image(fileReq);
                                                formDB
                                                    .save()
                                                    .then(() => {
                                                        imageDB
                                                            .save()
                                                            .then(() =>
                                                                res.json({ success: true, formDB })
                                                            )
                                                            .catch(next);
                                                    })
                                                    .catch(next);
                                            } else if (!dirFind || !dirFind.name)
                                                res.json({
                                                    error: `Danh mục '${checkDir}' chưa được khởi tạo`,
                                                });
                                        })
                                        .catch(next);
                                }
                            })
                            .catch(next);
                    }
                })
                .catch(next);
        }
    }

    get(req: Request, res: Response, next: NextFunction) {
        Flower.find({})
            .then((flowerFind) => res.json(flowerFind))
            .catch(next);
    }

    getWithDir(req: Request, res: Response, next: NextFunction) {
        Flower.find({ directory: req.params.slug })
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
