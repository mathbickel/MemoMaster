import postgres from "postgres";

export class DatabaseConnection {
    static getConnection() {
        return postgres('', {
            host: process.env.HOST,
            port: 3306,
            database: process.env.DATABASE,
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        })
    }
}