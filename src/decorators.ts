import { Request, Response } from "express";
import { addRuntime } from "./Database/Runtime/Runtime.dal";
import { FunctionType } from "./types";

export const measureRuntime = (handler: (req: Request, res: Response) => Promise<void>, type: FunctionType) => async (req: Request, res: Response) => {
    const start = Date.now();
    await handler(req, res);
    const runtimeInMillis = Date.now() - start;
    await addRuntime({ runtimeInMillis, type });
}