import { NextFunction, Request, Response } from 'express';
import User from '../models/User';

class RegisterController {
    post(req: Request, res: Response, next: NextFunction) {
        const formReq = req.body.data;
        User.findOne({ email: formReq.email })
            .then((userFind) => {
                if (userFind?.email) res.json({ error: 'Email này đã được đăng ký!' });
                else {
                    const userDB = new User(formReq);
                    if (userDB.password) {
                        userDB.password = userDB.encryptPassword(userDB.password);
                    }
                    userDB
                        .save()
                        .then(() => res.json({ success: true }))
                        .catch(next);
                }
            })
            .catch(next);
    }
}

export default new RegisterController();
