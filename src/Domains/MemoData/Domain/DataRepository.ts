import { IData } from "./IData"

export interface DataRepository {
    store(data: IData): IData
    getAll(): IData[]
    getById(id: number): IData
    update(id: number): IData
    remove(id: number): IData
}