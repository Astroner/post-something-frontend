export interface IUserModel {
    token?: string
    profile?: {
        email: string
        firstName: string
        lastName: string
    }
}