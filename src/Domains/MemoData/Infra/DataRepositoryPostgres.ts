import { inject, injectable } from "tsyringe";
import { DataRepository } from "../Domain/DataRepository";
import { IData } from "../Domain/IData";

@injectable()
export class DataRepositoryPostgres implements DataRepository {
    constructor(@inject('DbConnection') private conn){}

    async store(data: IData[]): Promise<void> {
        
    }

    async getAll(): Promise<IData[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: number): Promise<IData> {
        throw new Error("Method not implemented.");
    }
    
    async update(id: number): Promise<IData> {
        throw new Error("Method not implemented.");
    }
    
    async remove(id: number): Promise<IData> {
        throw new Error("Method not implemented.");
    }
}