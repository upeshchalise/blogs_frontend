export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
export interface UserSignup {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface Tokens {
    access_token: string;
    refresh_token: string
}

export interface loginUser {
    token: Tokens
    user: User;
}