declare module Base {
    interface IdName {
        id?: number | string,
        name?: string,
        [propName: string]: any
    }
}