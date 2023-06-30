import { Express } from 'express';

import userRouter from './userRouter';
import directoryRouter from './directoryRouter';

export default function routes(app: Express) {
    app.use('/user', userRouter);
    app.use('/directory', directoryRouter);
}
