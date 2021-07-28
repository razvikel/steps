import { Runtime, RuntimeModel } from "./Runtime";

export const addRuntime = async (runtime: Runtime) => RuntimeModel.insertMany([runtime]);

export const getAverageRuntimes = async () => {
    const docs = await RuntimeModel.aggregate([
        {
            $group: {
                _id: "$type",
                avgRuntime: { $avg: "$runtimeInMillis" }
            }
        }
    ]);

    return docs.map(({ _id, avgRuntime }) => ({ type: _id, avgRuntime }));
}