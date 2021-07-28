import cors from 'cors';
import express from 'express';
import { Database } from './Database/Database';
import { measureRuntime } from './decorators';
import { avgRuntimesHandler, createPostHandler, getPostsHandler, postsNumberHandler, topCreatorsHandler } from './handlers';

const app = express();
const port = 8080;
app.use(cors());

Database.connect().then(async () => {
    app.post('/posts', measureRuntime(createPostHandler, 'create-a-post'));

    app.get('/posts', measureRuntime(getPostsHandler, 'get-posts-list'));

    app.get('/postsnumber', postsNumberHandler);

    app.get('/statistics/topcreators', topCreatorsHandler);

    app.get('/statistics/runtimes', avgRuntimesHandler);
});


app.listen(port, () => console.log(`server is listening on ${port}`));