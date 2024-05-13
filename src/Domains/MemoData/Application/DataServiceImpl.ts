import { inject, injectable } from "tsyringe";

import { DataRepository } from "../Domain/DataRepository";
import { DataRepositoryEnum } from "../Domain/DataRepositoryEnum";
import { DataService } from "../Domain/DataService";
import { IData } from "../Domain/IData";

@injectable()
export class DataServiceImpl implements DataService {
    constructor(@inject(DataRepositoryEnum.DATA_REPOSITORY) private dataRepository: DataRepository) {}
    
    async store(data: IData[]): Promise<IData[]> {
        return await this.dataRepository.store(data)
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