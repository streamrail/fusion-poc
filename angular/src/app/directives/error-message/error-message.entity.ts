export interface CustomErrorMapping {
    [errorKey: string]: {errorMessageKey: string; textMapping?: {key: string; value: string}[]};
}
