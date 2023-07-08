import { NextFunction, Request, Response } from 'express';
import Cart from '../models/Cart';

class CartController {
    get(req: Request, res: Response, next: NextFunction) {
        Cart.find({ userId: req.query.q })
            .then((cartFind) => res.json(cartFind))
            .catch(next);
    }

    post(req: Request, res: Response, next: NextFunction) {
        const product = req.body.product;
        Cart.findOne({ id: product.flower.id, userId: product.userId })
            .then((cartFind) => {
                if (cartFind && cartFind.length) {
                    cartFind.length = cartFind.length + 1;
                    Cart.updateOne({ id: cartFind.id, userId: product.userId }, cartFind)
                        .then(() => res.json({ success: true }))
                        .catch(next);
                } else {
                    const cartDB = new Cart();
                    cartDB.id = product.flower.id;
                    cartDB.name = product.flower.name;
                    cartDB.price = product.flower.price;
                    cartDB.userId = product.userId;
                    cartDB.length = 1;
                    cartDB
                        .save()
                        .then(() => res.json({ success: true }))
                        .catch(next);
                }
            })
            .catch(next);
    }

    put(req: Request, res: Response, next: NextFunction) {
        const id = req.body.id;
        const option = req.body.option;
        const userId = req.body.userId;
        Cart.findOne({ id, userId })
            .then((cartFind) => {
                if (cartFind) {
                    if (option === 'increase') {
                        cartFind.length++;
                    } else if (option === 'decrease') {
                        cartFind.length--;
                    }
                    Cart.updateOne({ id, userId }, cartFind)
                        .then(() => {
                            res.json({ success: true });
                        })
                        .catch(next);
                } else res.json({ error: true });
            })
            .catch(next);
    }

    delete(req: Request, res: Response, next: NextFunction) {
        Cart.deleteOne({ id: req.body.id, userId: req.body.userId })
            .then(() => {
                res.json({ success: true });
            })
            .catch(next);
    }
}

export default new CartController();
