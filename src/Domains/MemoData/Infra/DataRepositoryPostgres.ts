import { inject, injectable } from "tsyringe";
import { DbCommand } from "../../../common/database/DbCommand";
import { DbConnection } from "../../../common/database/DbConnection";
import { DataRepository } from "../Domain/DataRepository";
import { IData } from "../Domain/IData";
import { STORE } from "./sql/store";

@injectable()
export class DataRepositoryPostgres implements DataRepository {
    constructor(@inject('DbConnection') private conn: DbConnection){}

    async store(data: IData[]): Promise<void> {
        await this.conn.open()
        const command = this.conn.command()
        try {
            this.getStored(data, command)    
        } finally {
            await this.conn.close()
        }    
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

    private async getStored(data: IData[], command: DbCommand<any, any>):Promise<void> {
        data.map(async (data: IData) => {
            await command.execute({
                commandText: STORE,
                binds: [
                    data.id,
                    data.title,
                    data.author,
                    data.category,
                    data.content,
                    data.description,,
                    data.tags,
                    data.relatedlinks,
                    data.source,
                    data.updated_at,
                    data.created_at
                ]
            })
        })
    }
}