import { IData } from "../../Domains/MemoData/Domain/IData"

export interface DbConnection {
    command(query: string, data?: IData[]): Promise<IData[]>
    open():Promise<DbConnection>
    close():Promise<void>
}