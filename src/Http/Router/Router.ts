import { EntryController } from "../Controllers/EntryController";
import { HttpClient } from "./HttpClient";

export class Router {
    constructor(protected HttpClient: HttpClient){}

    async init(): Promise<void> 
    {
        this.HttpClient.on('get', '/',async (params:string, body: unknown) => {
            return new EntryController().index(body)
        })
    }
}