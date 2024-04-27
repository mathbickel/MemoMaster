import { inject, injectable } from "tsyringe";

import { DbConnection } from "../../../commom/db/DbConnection";
import { DatabaseConnectionEnum } from "../../../commom/db/bootstrap/DatabaseConnectionEnum";
import { DataRepository } from "../Domain/DataRepository";
import { IData } from "../Domain/IData";
import { DatabaseToMemoDataAdapter } from "./adapters/DatabaseToMemoDataAdapter";

@injectable()
export class DataRepositoryDb implements DataRepository {
    constructor(@inject(DatabaseConnectionEnum.DATABASE_CONNECTION) private conn: DbConnection){}

    async store(data: IData[]): Promise<IData[]> {
        try {
            const result = await this.conn.command("insert", data)
            console.log(result, 'result')
            return DatabaseToMemoDataAdapter.toMemoData(result)
        } catch (e) {
            console.log(e, 'error')
        }
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