import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[isLog, setIsLog] = useState(false)

    return(
        <AuthContext.Provider value={[isLog, setIsLog]}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};