import {create} from 'zustand';
import { User } from "../types/user";
import { persist } from 'zustand/middleware';

export type AuthenticatedUser = {
    token :{
        access_token : string,
        refresh_token : string
    },
    user: User
}


interface UserStore {
    user: AuthenticatedUser;
    setUser: (user: AuthenticatedUser) => void;
    clearUser: () => void;
}
// export type AuthUserActions = {
//     setUser: (user: AuthenticatedUser) => void;
//     clearUser: () => void;
// }

// export type UserStore = AuthenticatedUser & AuthUserActions;

export const defaultUserState : AuthenticatedUser = {
    token : {
        access_token: '',
        refresh_token: ''
    },
    user :{
        id: '',
        first_name: '',
        last_name: '',
        email: ''
    }
}

// export const createUserStore  = (initState: AuthenticatedUser = defaultUserState) => {
//     return createStore<UserStore>((set) => ({
//         ...initState,
//         setUser: (user) => set(() => ({ ...user })),
//         clearUser: () => set(() => ({ ...defaultUserState }))
//     }))
// }




// export const useUserStore = create<UserStore>((set) => ({
//     user: defaultUserState,
//     setUser: (user: AuthenticatedUser) => set({user}),
//     clearUser: () => set(() => ({ user: defaultUserState }))
// }))


export const useUserStore = create<UserStore>()(persist((set,get) => ({
    user: defaultUserState,
    setUser: (user: AuthenticatedUser) => set({user}),
    clearUser: () => set(() => ({ user: defaultUserState }))
}), 
    {
        name: "user"
    }
))