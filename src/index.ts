import cors from 'cors';
import express from 'express';
import { Database } from './Database/Database';

const app = express();
const port = 8080;
app.use(cors());

Database.connect().then(() => {
    app.get('/', async (req, res) => {
        res.send('hi');
    });
});


app.listen(port, () => console.log(`server is listening on ${port}`));