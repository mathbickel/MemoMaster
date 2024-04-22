import { inject } from "tsyringe";
import { DataRepository } from "../Domain/DataRepository";
import { DataService } from "../Domain/DataService";
import { IData } from "../Domain/IData";

export class DataServiceImpl implements DataService {
    constructor(@inject('DataRepositoryPostgres') private dataRepository: DataRepository) {}
    
    async store(data: IData[]): Promise<IData[]> {
        await this.dataRepository.store(data)
        return data
    }

    getAll(): Promise<IData[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<IData> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Promise<IData> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<IData> {
        throw new Error("Method not implemented.");
    }
    
   
}