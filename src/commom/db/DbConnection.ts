import { IData } from "../../Domains/MemoData/Domain/IData"
import { queryResult } from "./types"

export interface DbConnection {
    command(query: string, data?: IData[]): Promise<queryResult>
    open():Promise<DbConnection>
    close():Promise<void>
}