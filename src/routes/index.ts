import { Express } from 'express';

import userRouter from './userRouter';

export default function routes(app: Express) {
    app.use('/user', userRouter);
}
