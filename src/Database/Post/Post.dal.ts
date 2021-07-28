import { PostModel, RawPost } from "./Post";

export const createPost = async (post: RawPost) => PostModel.insertMany([{ ...post, createdAt: Date.now() }]);

export const newestPosts = async (skip: number, limit: number) => PostModel.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit);

export const postsCount = async () => PostModel.countDocuments();

export const getTopCreators = async () => {
    const docs = await PostModel.aggregate([
        {
            $lookup:
            {
                from: "users",
                localField: "creator",
                foreignField: "_id",
                as: "creator"
            }
        },
        {
            $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$creator", 0] }, "$$ROOT"] } }
        },
        {
            $group: {
                _id: "$creator",
                name: { $first: "$name" },
                posts: { $count: {} }
            }
        },
        {
            $sort: {
                posts: -1
            }
        },
        {
            $limit: 10
        }
    ]);

    return docs.map(({name, posts}) => ({name, posts}));
}