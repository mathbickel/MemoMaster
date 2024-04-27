import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../commom/db/DbConnection";
import { DataRepository } from "../Domain/DataRepository";
import { IData } from "../Domain/IData";
import { DatabaseToMemoDataAdapter } from "./adapters/DatabaseToMemoDataAdapter";

@injectable()
export class DataRepositoryPostgres implements DataRepository {
    constructor(@inject('DatabaseConnectionPostgres') private conn: DbConnection){}

    async store(data: IData[]): Promise<IData[]> {
        const result = await this.conn.command("", data)
        return DatabaseToMemoDataAdapter.toMemoData(result)
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