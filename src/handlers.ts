import { Request, Response } from "express";
import { createPost, newestPosts, postsCount } from "./Database/Post/Post.dal";
import { isCreatePostRequestBody, isGetPostsRequestQuery } from "./typeguards";

export const createPostHandler = async (req: Request, res: Response) => {
    if (isCreatePostRequestBody(req.body)) {
        await createPost(req.body.post);
        res.send();
    } else {
        res.sendStatus(400);
    }
}

export const getPostsHandler = async (req: Request, res: Response) => {
    if (isGetPostsRequestQuery(req.query)) {
        const skip = req.query.skip;
        const limit = req.query.limit;
        const posts = await newestPosts(skip, limit);
        res.send({ posts });
    } else {
        res.sendStatus(400);
    }
}

export const postsNumberHandler = async (req: Request, res: Response) => {
    const postsnumber = await postsCount();
    res.send({ postsnumber });
}