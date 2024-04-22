import { IData } from "./IData";

export interface DataService {
    store(data: IData): IData
    getAll(): IData[]
    getById(id: number): IData
    update(id: number): IData
    remove(id: number): IData
}