import mongoose from 'mongoose';

export class Database {
    public static async connect() {
        await mongoose.connect('mongodb://localhost/steps', { useNewUrlParser: true });
        console.log('connected to db');
    }
}