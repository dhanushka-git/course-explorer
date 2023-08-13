import * as React from "react"
import {RouterProvider} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import AppRouter from "../src/router";

const App = () => {
    return (
        <>
            <RouterProvider router={AppRouter}/>
            <ToastContainer/>
        </>
    );
}

export default App;