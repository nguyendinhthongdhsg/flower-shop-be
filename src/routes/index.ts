import { Express } from 'express';

import userRouter from './userRouter';
import directoryRouter from './directoryRouter';
import flowerRouter from './flowerRouter';
import imageRouter from './imageRouter';
import cartRouter from './cartRouter';

export default function routes(app: Express) {
    app.use('/user', userRouter);
    app.use('/directory', directoryRouter);
    app.use('/flower', flowerRouter);
    app.use('/image', imageRouter);
    app.use('/cart', cartRouter);
}
