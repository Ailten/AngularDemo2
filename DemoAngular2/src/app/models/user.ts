
export interface User{
    id?: number;
    email: string;
    role: string;
    
    passwordHash?: string;
    salt?: string;
}

export interface UserToken{
    accessToken: string;
    user: User;
}

export interface UserLoginForm{
    email: string;
    password: string;
}