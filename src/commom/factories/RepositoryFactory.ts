
export class RepostoryFactory {
    static async connection() {
        // return DatabasePostgresConnection.getConnection()
    }

    static async getRepository() {
        const conn = await this.connection()
        // return new DataRepositoryPostgres(conn)
    }
}