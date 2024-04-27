
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
            'memomaster',
            'root',
            'root',
            {
                host: '127.0.0.1' ,
                port:  5432,
                dialect: "postgres"
            }
        )
    }

    async open(): Promise<DbConnection> {
        try {
            return await this.sequelize.authenticate() as unknown as DbConnection
        } catch (e) {
            console.log(e)
            throw new Error('Sequelize authentication error')
        }
    }

    async command(query: string, data?: IData[]): Promise<queryResult> {
        try {
            await this.open()
            return await this.sequelize.query({query: 'INSERT INTO records VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values: data})
        } catch (e) {
            throw new Error("error" + e)
        }
        finally {
            await this.close()
        }
    }

    async close(): Promise<void> {
        await this.sequelize.close()
    }
}