import { IDataAdapter } from "./IDataAdapter";

export class DataAdapter implements IDataAdapter {
    adaptRequesToData(request: unknown): void {
        throw new Error("Method not implemented.");
    }
}