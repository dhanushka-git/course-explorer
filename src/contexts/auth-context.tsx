import {createContext, useContext, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebaseApp from "../firebase/firebase";

type AuthContextType = {
    user: any,
    isLogged: boolean | undefined
}

export const AuthContext = createContext<AuthContextType>({} as any)

const AuthContextProvider = ({children}: any) => {

    const [isLogged, setIsLogged] = useState<boolean>()
    const [user, setUser] = useState<any>()

    const auth = getAuth(firebaseApp);

    useEffect(() => {
        init()

    }, [])

    const init = async () => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setIsLogged(false)
                setUser(user)
            } else {
                setIsLogged(false)
            }
        })
    }

    return (
        <AuthContext.Provider value={{user, isLogged}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;


export const useAuthContext = () => {
    const context: any = useContext(AuthContext)

    if (context?.isLogged === undefined) {
        console.log('context?.isLogged === undefined')
        return null
    } else {
        return context
    }
}