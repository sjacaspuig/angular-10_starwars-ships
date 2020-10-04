export interface Cache {
    key: string;
    data: any;
    expirationMins?: number;
}
