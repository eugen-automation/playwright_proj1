export interface IAuthCredentials {
    email: string;
    password: string;
}

export interface IRegistrationResult {
    status: boolean;
    credentials: IAuthCredentials | null;
    error?: string | unknown;
}
