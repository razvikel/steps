import { RawPost } from "./Database/Post/Post";

export type CreatePostRequestBody = { post: RawPost };
export type GetPostsRequestQuery = { skip: number, limit: number };