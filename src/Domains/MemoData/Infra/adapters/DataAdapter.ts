import { IData } from "../../Domain/IData";
import { IDataAdapter } from "./IDataAdapter";

export class DataAdapter implements IDataAdapter {
    adaptRequesToData(request: unknown): IData[] {
        if(typeof request === 'object' && request !== null) {
            return [{
                id: request.hasOwnProperty('id') ? (request as any).id : 0,
                title: request.hasOwnProperty('title') ? (request as any).title : '',
                description: request.hasOwnProperty('description') ? (request as any).description : undefined,
                category: request.hasOwnProperty('category') ? (request as any).category : '',
                tags: request.hasOwnProperty('tags') ? (request as any).tags : undefined,
                content: request.hasOwnProperty('content') ? (request as any).content : [],
                author: request.hasOwnProperty('author') ? (request as any).author : '',
                source: request.hasOwnProperty('source') ? (request as any).source : undefined,
                relatedlinks: request.hasOwnProperty('relatedlinks') ? (request as any).relatedlinks : undefined,
                created_at: request.hasOwnProperty('created_at') ? (request as any).created_at : new Date(),
                updated_at: request.hasOwnProperty('updated_at') ? (request as any).updated_at : new Date()
            }]
        }
    }
}