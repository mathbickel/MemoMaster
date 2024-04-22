export interface BaseController {
    index<T>(data: T[], params?:string,): Promise<T>
}