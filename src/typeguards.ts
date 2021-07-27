import { isNil } from "ramda";
import { RawPost } from "./Database/Post/Post";
import { CreatePostRequestBody, GetPostsRequestQuery } from "./types";

export const isCreatePostRequestBody = (body: any): body is CreatePostRequestBody => isRawPost(body.post);

const isRawPost = (val: any): val is RawPost => ![val.body, val.title, val.creator].some(isNil);

export const isGetPostsRequestQuery = (query: any): query is GetPostsRequestQuery => ![query.skip, query.limit].some(Number.isNaN);