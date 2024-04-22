import { DataService } from "../Domain/DataService";
import { IData } from "../Domain/IData";

export class DataServiceImpl implements DataService {
    store(data: IData): IData {
        throw new Error("Method not implemented.");
    }
    getAll(): IData[] {
        throw new Error("Method not implemented.");
    }
    getById(id: number): IData {
        throw new Error("Method not implemented.");
    }
    update(id: number): IData {
        throw new Error("Method not implemented.");
    }
    remove(id: number): IData {
        throw new Error("Method not implemented.");
    }
}