import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export default function UserProvider({ children }){
    const [user, setUser] = useState(null);

    async function login(email, password) {
        
    }

    async function register(email, password) {
        
    }

    async function logout(email, password) {
        
    }

    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            { children }
        </UserContext.Provider>
    )
}