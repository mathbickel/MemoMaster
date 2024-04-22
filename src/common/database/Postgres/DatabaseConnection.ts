import postgres from "postgres";

export class DatabaseConnection {
    static getConnection() {
        return postgres({
            host: '127.0.0.1',
            port: 3306,
            database: 'memomaster',
            username: 'root',
            password: ''
        })
    }
}