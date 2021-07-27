import { Schema, model, Model } from 'mongoose';

export type SingleEndpointPrice = {
    date: Date,
    price: number
}

export type Price = {
    date: Date,
    averagePrice: number
}

const priceSchema = new Schema({
    date: Date,
    averagePrice: Number
}, { versionKey: false });

export const PriceModel: Model<Price> = model('Price', priceSchema);