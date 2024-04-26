import { DataRepositoryPostgres } from "../../Domains/MemoData/Infra/DataRepositoryPostgres"
import { DatabaseConnectionPostgres } from "../db/Postgres/DatabaseConnectionPostgres"

export class RepostoryFactory {
    static async connection() {
        return new DatabaseConnectionPostgres().open()
    }

    static async getRepository() {
        const conn = await this.connection()
        return new DataRepositoryPostgres(conn)
    }
}