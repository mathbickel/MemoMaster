export interface HttpResponse<T> {
    record: T
    headers: HttpHeaders
}

export interface HttpHeaders {
    statusCode: number,
    ContentType: string
}