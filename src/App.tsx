import * as React from "react"
import {RouterProvider} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import AppRouter from "../src/router";
import AuthContextProvider from "./contexts/auth-context";

const App = () => {

    return (
        <>
            <AuthContextProvider>
                <RouterProvider router={AppRouter}/>
            </AuthContextProvider>
            <ToastContainer/>
        </>
    );
}

export default App;