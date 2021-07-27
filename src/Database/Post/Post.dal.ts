import { PostModel, RawPost } from "./Post";

export const createPost = async (post: RawPost) => PostModel.insertMany([{ ...post, createdAt: Date.now() }]);

export const newestPosts = async (skip: number, limit: number) => PostModel.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit);

export const postsCount = async () => PostModel.countDocuments();