import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [showSignInMessage, setShowSignInMessage] = useState(false);

    return (
        <AuthContext.Provider value={{ showSignInMessage, setShowSignInMessage }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
