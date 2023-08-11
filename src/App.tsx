import * as React from "react"
import {RouterProvider} from "react-router-dom";
import AppRouter from "./router";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
            <RouterProvider router={AppRouter}/>
            <ToastContainer/>
        </>
    );
}

export default App;