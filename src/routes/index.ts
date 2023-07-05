import { Express } from 'express';

import userRouter from './userRouter';
import directoryRouter from './directoryRouter';
import flowerRouter from './flowerRouter';

export default function routes(app: Express) {
    app.use('/user', userRouter);
    app.use('/directory', directoryRouter);
    app.use('/flower', flowerRouter);
}
