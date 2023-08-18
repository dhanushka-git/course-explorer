import {createContext, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebaseApp from "./firebase/firebase";

const AuthContext = createContext({} as any)

const AuthContextProvider = ({children}: any) => {

    const [isLogged, setIsLogged] = useState<boolean>()
    const auth = getAuth(firebaseApp);

    useEffect(() => {
        init()

    }, [auth])

    const init = () => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setIsLogged(true)
            } else {
                setIsLogged(false)
            }
        })
    }


    return (
        <AuthContext.Provider value={isLogged}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;