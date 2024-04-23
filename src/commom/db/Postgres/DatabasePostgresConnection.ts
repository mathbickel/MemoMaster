
import { DbCommand } from '../DbCommand';
import { DbConnection } from '../DbConnection';

export class DatabasePostgresConnection implements DbConnection{
    async open(): Promise<> {
        
    }

    async command(): DbCommand<any, any> {
        throw new Error('Method not implemented.');
    }

    async close(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}