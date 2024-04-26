import { DataServiceImpl } from "../../Domains/MemoData/Application/DataServiceImpl";
import { IData } from "../../Domains/MemoData/Domain/IData";
import { DataAdapter } from "../../Domains/MemoData/Infra/adapters/DataAdapter";
import { DataToResponse } from "../../Domains/MemoData/Infra/adapters/DataToResponse";
import { RepostoryFactory } from "../../commom/factories/RepositoryFactory";
import { HttpResponse } from "../types";
import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}
    
    async index<T>(data: T, params: string): Promise<HttpResponse<IData[]>> {
        if(!data) throw new Error('missing data')
        const adapted = new DataAdapter().adaptRequesToData(data);
        const repository = await RepostoryFactory.getRepository()
        const service = await new DataServiceImpl(repository).store(adapted);
        return await new DataToResponse().adapter(service)
    }
}