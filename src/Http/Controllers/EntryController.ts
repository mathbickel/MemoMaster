import { DataAdapter } from "../../Domains/Adapters/DataAdapter";
import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}
    
    index<T>(data: T): Promise<T> {
        if(!data) return
        const adapted = new DataAdapter().adaptRequesToData(data);
    }
}