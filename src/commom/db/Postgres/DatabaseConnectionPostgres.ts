
import { Sequelize } from 'sequelize';
import { DbConnection } from '../DbConnection';

export interface DbConnectionConfig {
    host: string
    user: string
    password: string
    database: string
}

export class DatabaseConnectionPostgres implements DbConnection {
    private sequelize: Sequelize

    constructor(){
        this.sequelize = new Sequelize(
            process.env.DATABASE,
            process.env.USERNAME,
            process.env.PASSWORD,
            {
                host: process.env.HOST,
                port:  Number(process.env.PORT),
                dialect: "postgres"
            }
        )
    }

    async open(): Promise<DbConnection> {
        try {
            await this.sequelize.authenticate()
            return this
        } catch (e) {
            console.log(e)
            throw new Error('Sequelize authentication error')
        }
    }

    async command(): DbCommand<any, any> {
        try {
            await this.open()
            await this.sequelize.query('SELECT * FROM RECORDS')
        } finally {
            await this.close()
        }
    }

    async close(): Promise<void> {
        await this.sequelize.close()
    }
}