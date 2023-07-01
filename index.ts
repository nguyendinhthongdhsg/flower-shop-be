import express from 'express';
import { Request } from 'express';
import cors from 'cors';

const port = 8000;
import routes from './src/routes';
import db from './src/config/db';

const app = express();

// Connect DB
db.connect();

// cors data
app.use(cors<Request>());

// Express middleware
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// Route init
routes(app);

// app listen port
app.listen(port, () => {
    console.log(`App is listening port localhost:${port}`);
});
