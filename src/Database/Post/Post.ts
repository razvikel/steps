import { model, Model, Schema } from 'mongoose';
import { UserID } from '../User/User';

export interface RawPost {
    title: string;
    body: string;
    creator: UserID;
}

export interface Post extends RawPost {
    createdAt: number; // timestamp
}

const postSchema = new Schema({
    title: String,
    body: String,
    creator: String,
    createdAt: Number
}, { versionKey: false });

export const PostModel: Model<Post> = model('Post', postSchema);