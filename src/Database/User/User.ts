import { Schema, model, Model } from 'mongoose';

export type UserID = string;

export interface User {
    _id: UserID;
    name: string;
}

export const userSchema = new Schema({
    _id: String,
    name: String
}, { versionKey: false });

export const UserModel: Model<User> = model('User', userSchema);