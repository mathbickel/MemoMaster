import { DataServiceImpl } from "../../Domains/MemoData/Application/DataServiceImpl";
import { DataAdapter } from "../../Domains/MemoData/Infra/adapters/DataAdapter";
import { RepostoryFactory } from "../../commom/factories/RepositoryFactory";
import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}
    
    async index<T>(data: T[]): Promise<T> {
        if(!data) return
        const adapted = new DataAdapter().adaptRequesToData(data);
        const repository = await RepostoryFactory.getRepository()
        const service = await new DataServiceImpl(repository).store(adapted);
    }
}