import {createContext, type ReactNode, useCallback, useContext, useEffect, useState} from 'react'
import type {IUser, IStoredUser, AuthContextValue} from "../types/auth_types.ts";
import {hashPassword, verifyPassword} from "../utils/crypto.ts";



const AUTH_KEY = "auth"

const storage = {
    get:():IStoredUser | null => {
            try {
                const raw = localStorage.getItem(AUTH_KEY);
                return raw ? JSON.parse(raw) : null;
            }catch {return null}
    },
    set: (user: IStoredUser) => {
        localStorage.setItem(AUTH_KEY , JSON.stringify(user))
    },
    remove: () => localStorage.removeItem(AUTH_KEY)
}

const AuthContext = createContext<AuthContextValue | null>(null)


const AuthProvider= ({children} : {children: ReactNode}) => {
    const [user , setUser] = useState<IUser | null>(null)
    const [isRegistered , setIsRegistered] = useState<boolean>(false)
    const [isLoading , setIsLoading] = useState<boolean>(true)

    useEffect(() =>{
        const stored = storage.get()
        setIsRegistered(!!stored)
        setIsLoading(false)
    }, [])

    const register = useCallback(async (fullName: string , password:string) => {
       try {
           const passwordHash = await hashPassword(password);
           const createdAt = new Date().toISOString()
           storage.set({fullName , password: passwordHash ,createdAt })
           setIsRegistered(true)
           setUser({fullName, createdAt})
           return true
       }catch {
           return false
       }

    }, [])

    const login = useCallback(async (password: string): Promise<boolean> => {
        const stored = storage.get()
        if(!stored) return false;
        const ok = await verifyPassword(stored.password , password)
        if(ok) setUser({fullName: stored.fullName , createdAt: stored.createdAt})
        return ok
    }, [])


    const logout = useCallback(() => setUser(null) , [])

    const deleteAccount = () => {
        storage.remove()
        setUser(null)
        setIsRegistered(false)
    }


    if(isLoading) return null

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            isRegistered,
            register,
            login,
            logout,
            deleteAccount,
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = (): AuthContextValue => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
