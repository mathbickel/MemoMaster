import { IData } from "../../Domains/MemoData/Domain/IData";
import { HttpResponse } from "../types";

export interface BaseController {
    index<T>(data: T, params?: string): Promise<HttpResponse<IData[]>>
}