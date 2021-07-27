import { Schema, model, Model } from 'mongoose';

export interface User {
    name: string;
    _id: string;
}

export const userSchema = new Schema({
    _id: String,
    name: String
}, { versionKey: false });

export const UserModel: Model<User> = model('User', userSchema);