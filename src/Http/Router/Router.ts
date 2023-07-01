import { HttpClient } from "../HttpClient/HttpClient";

export class Router {
    constructor(protected HttpClient: HttpClient){}

    async init(): Promise<void> 
    {
        this.HttpClient.on('get', '/',async (params:string, body: unknown) => {
            return ""
        })
    }
}