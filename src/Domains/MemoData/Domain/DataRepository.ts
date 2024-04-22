import { IData } from "./IData"

export interface DataRepository {
    store(data: IData[]): Promise<void>
    getAll(): Promise<IData[]>
    getById(id: number): Promise<IData>
    update(id: number): Promise<IData>
    remove(id: number): Promise<IData>
}