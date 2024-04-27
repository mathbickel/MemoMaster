import { DataRepositoryDb } from "../../Domains/MemoData/Infra/DataRepositoryDb"
import { DatabaseConnectionPostgres } from "../db/Postgres/DatabaseConnectionPostgres"

export class RepostoryFactory {
    static async connection() {
        return new DatabaseConnectionPostgres().open()
    }

    static async getRepository() {
        const conn = await this.connection()
        return new DataRepositoryDb(conn)
    }
}