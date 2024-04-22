import { DataRepositoryPostgres } from "../../Domains/MemoData/Infra/DataRepositoryPostgres";
import { DatabaseConnection } from "../database/Postgres/DatabaseConnection";

export class RepostoryFactory {
    static async connection() {
        return DatabaseConnection.getConnection()
    }

    static async getRepository() {
        const conn = await this.connection()
        return new DataRepositoryPostgres(conn)
    }
}