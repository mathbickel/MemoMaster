import { IData } from "../../Domain/IData";

export class DatabaseToMemoDataAdapter {
    static async toMemoData(data: unknown[]): Promise<IData[]> {
        return [{
                id: data.hasOwnProperty('id') ? (data as any).id : 0,
                title: data.hasOwnProperty('title') ? (data as any).title : '',
                description: data.hasOwnProperty('description') ? (data as any).description : undefined,
                category: data.hasOwnProperty('category') ? (data as any).category : '',
                tags: data.hasOwnProperty('tags') ? (data as any).tags : undefined,
                content: data.hasOwnProperty('content') ? (data as any).content : [],
                author: data.hasOwnProperty('author') ? (data as any).author : '',
                source: data.hasOwnProperty('source') ? (data as any).source : undefined,
                relatedlinks: data.hasOwnProperty('relatedlinks') ? (data as any).relatedlinks : undefined,
                created_at: data.hasOwnProperty('created_at') ? (data as any).created_at : new Date(),
                updated_at: data.hasOwnProperty('updated_at') ? (data as any).updated_at : new Date()
            }
        ]
    }
}