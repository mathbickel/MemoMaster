
import { Sequelize } from 'sequelize';
import { injectable } from 'tsyringe';
import { IData } from '../../../Domains/MemoData/Domain/IData';
import { DbConnection } from '../DbConnection';

export interface DbConnectionConfig {
    host: string
    user: string
    password: string
    database: string
}
@injectable()
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

    async command(query: string, data?: IData[]): Promise<IData[]> {
        try {
            await this.open()
            const result = await this.sequelize.query('SELECT * FROM RECORDS')
            // const result = await this.sequelize.query({query: 'INSERT INTO records VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values: data})
            console.log(result, 'RES')
            return data ?? null
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