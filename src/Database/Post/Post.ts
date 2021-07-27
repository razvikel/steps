import { Schema, model, Model } from 'mongoose';
import { User, userSchema } from '../User/User';

export interface RawPost {
    title: string;
    body: string;
    creator: User;
}

export interface Post extends RawPost {
    createdAt: number; // timestamp
}

const postSchema = new Schema({
    title: String,
    body: String,
    creator: userSchema,
    createdAt: Number
}, { versionKey: false });

export const PostModel: Model<Post> = model('Post', postSchema);