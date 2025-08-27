export interface IAuthCredentials {
    email: string;
    password: string;
}

export interface IRegistrationResult {
    status: boolean;
    credentials: IAuthCredentials;
}
