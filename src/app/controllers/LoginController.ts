import { NextFunction, Request, Response } from 'express';
import User from '../models/User';

import { UserProps } from '../models/User';

class LoginController {
    loginWithSocal(req: Request, res: Response, next: NextFunction) {
        const userReq = req.body.user;
        User.findOne({ email: userReq.email })
            .then((userFind) => {
                if (userFind?.name) res.sendStatus(200);
                else {
                    const userDB = new User(userReq);
                    userDB
                        .save()
                        .then(() => res.sendStatus(200))
                        .catch(next);
                }
            })
            .catch(next);
    }

    loginWithEmail(req: Request, res: Response, next: NextFunction) {
        const formReq = req.body.data;
        User.findOne({ email: formReq.email })
            .then((userFind) => {
                if (
                    userFind?.name &&
                    userFind?.password &&
                    userFind?.validPassword(formReq.password)
                ) {
                    const userRes: UserProps = userFind;
                    delete userRes['password'];
                    res.json(userRes);
                } else {
                    res.json({ error: true });
                }
            })
            .catch(() => res.json({ error: true }));
    }

    loginWithAdmin(req: Request, res: Response, next: NextFunction) {
        const userReq = req.body.user;
        User.findOne({ email: userReq.email })
            .then((userFind) => {
                if (userFind?.admin) {
                    res.json(true);
                } else {
                    res.json(false);
                }
            })
            .catch(next);
    }
}

export default new LoginController();
