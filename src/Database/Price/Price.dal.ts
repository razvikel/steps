import { Price, PriceModel } from "./Price";
import moment from "moment";
import { isToday, roundToDayStart } from "../../utils";

export const getPricesFromDate = async (earliest: Date): Promise<Price[]> =>
    PriceModel.find({
        date: {
            $gte: roundToDayStart(earliest)
        }
    });

export const getLatestDate = async (): Promise<Date> => {
    const doc = await PriceModel.findOne().sort({ date: -1 });
    return doc ? doc.date : moment().subtract(30, 'days').toDate();
}

export const saveToDB = async (data: Price[]): Promise<void> => {
    await PriceModel.insertMany(data.filter(price => !isToday(price)));
    await PriceModel.updateOne({ date: roundToDayStart(new Date()) }, data.find(isToday), { upsert: true });
}