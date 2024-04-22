export interface BaseController {
    index<T>(data: T): Promise<T>
}