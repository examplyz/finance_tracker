export interface IUser {
    fullName: string,
    createdAt: string
}

export interface IStoredUser {
    fullName: string ,
    password: string ,
    createdAt: string,
}
export interface AuthContextValue {
    user: IUser | null;
    isAuthenticated: boolean;
    isRegistered: boolean;
    register: (name: string, password: string) => Promise<boolean>;
    login: (password: string) => Promise<boolean>;
    logout: () => void;
    deleteAccount: () => void;
}