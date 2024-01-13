export interface GeneralResponse {
    message: string;
    idGenerated: string;
    status: boolean;
}

export interface GeneralResponseData<T> extends GeneralResponse {
    data: T;
}
