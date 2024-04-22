export interface IData {
    id: number
    title: string
    description?: string
    category: any // vai ter category
    tags?: string
    content: string[] 
    author: string
    source?: string
    relatedlinks?: string
    created_at: Date
    updated_at: Date
}