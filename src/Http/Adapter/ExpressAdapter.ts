import express, { Request, Response } from "express";
import { HttpClient } from "../HttpClient/HttpClient";

export class ExpressAdapter implements HttpClient {
    app: any
    port: number

    constructor() 
    {
        this.app = express()
        this.app.use(express.json())
        this.port = this.port
        // bootstrapStart()
    }

    on(method: string, url: string, callback: Function): void 
    {
        this.app[method](url, async function (req: Request, res: Response) {
            const output = await callback(req.params, req.body)
            res.json(output)
        })
    }
    
    listen(port: number): void 
    {
        this.app.listen(port)
    }

}