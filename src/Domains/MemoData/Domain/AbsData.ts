import { IData } from "./IData";

export abstract class Data {
    constructor(protected data: IData[]){}

    getId(): number {
        return this.data['id']
    }
}