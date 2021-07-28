import { model, Model, Schema } from 'mongoose';
import { FunctionType } from '../../types';

export interface Runtime {
    type: FunctionType,
    runtimeInMillis: number
}

const runtimeSchema = new Schema({
    type: String,
    runtimeInMillis: Number
}, { versionKey: false });

export const RuntimeModel: Model<Runtime> = model('Runtime', runtimeSchema);