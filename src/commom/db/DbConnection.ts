import { IData } from "../../Domains/MemoData/Domain/IData"
import { queryResult } from "./types"

export interface DbConnection {
    command<T>(query: string, data?: IData[]): Promise<queryResult>
    open():Promise<void>
    close():Promise<void>
}