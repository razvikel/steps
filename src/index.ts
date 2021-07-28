import cors from 'cors';
import express from 'express';
import { Database } from './Database/Database';
import { createPostHandler, getPostsHandler, postsNumberHandler, topCreatorsHandler } from './handlers';

const app = express();
const port = 8080;
app.use(cors());

Database.connect().then(async () => {
    app.post('/posts', createPostHandler);

    app.get('/posts', getPostsHandler);

    app.get('/postsnumber', postsNumberHandler);

    app.get('/statistics/topcreators', topCreatorsHandler);

    app.get('/statistics/runtimes', async (req, res) => {

    });
});


app.listen(port, () => console.log(`server is listening on ${port}`));