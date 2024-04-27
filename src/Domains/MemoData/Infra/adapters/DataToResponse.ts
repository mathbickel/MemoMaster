import { HttpResponse } from "../../../../Http/types";
import { IData } from "../../Domain/IData";

export class DataToResponse {
    async adapter(data: IData[]): Promise<HttpResponse<IData[]>> {
        const formated = data.map(this.format)
        return {
            record: formated,
            headers: {
                statusCode: 200,
                ContentType: 'Application/json'
            }
        }
    }

    private format(data: IData): IData {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            author: data.author,
            category: data.category,
            content: data.content,
            tags: data.tags,
            source: data.source,
            relatedlinks: data.relatedlinks,
            created_at: data.created_at,
            updated_at: data.updated_at
        }
    }
}