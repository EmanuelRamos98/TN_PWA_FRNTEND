import { createContext, useEffect, useState } from "react";

//Esta constante es un componet
export const AuthContext = createContext()

//Necesitamos crear el compnente proveedor

export const AuthProvider = ({ children }) => {
    //Es una prop para pasar el contenido hijo de nuestro componente


    //Si hay token en el session o localstorage, entonces esta autentificado

    const access_token = Boolean(sessionStorage.getItem('access_token'))

    const [is_authenticated_state, setIsAuthenticatedState] = useState(access_token)

    useEffect(() => {
        Boolean(sessionStorage.getItem('access_token')) && setIsAuthenticatedState(true)
    }, [])

    return (
        <AuthContext.Provider
            value={
                {
                    is_authenticated_state
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}