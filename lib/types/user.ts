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

export interface loginUser {
    token: string;
    user: User;
}