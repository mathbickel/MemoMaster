
import { Sequelize } from 'sequelize';
import { IData } from '../../../Domains/MemoData/Domain/IData';
import { DbConnection } from '../DbConnection';
import { queryResult } from '../types';

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

    async open(): Promise<void> {
        try {
            await this.sequelize.authenticate()
        } catch (e) {
            console.log(e)
            throw new Error('Sequelize authentication error')
        }
    }

    async command(query: string, data?: IData[]): Promise<queryResult> {
        try {
            await this.open()
            return await this.sequelize.query({query: 'INSERT INTO records VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values: data})
        } finally {
            await this.close()
        }
    }

    async close(): Promise<void> {
        await this.sequelize.close()
    }
}