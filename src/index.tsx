import {ChakraProvider, ColorModeScript, theme} from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import "./styles/tailwind.css";
import App from "./App";
import {applyMiddleware, compose, createStore} from "@reduxjs/toolkit";
import rootReducer from './reducers'
import {Provider} from "react-redux";
import logger from "./middleware/logger";
import thunkMiddleware from "redux-thunk";
import monitorReducerEnhancer from "./enhancers/monitorReducer";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware) // logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
const composedEnhancers: any = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

root.render(
    <React.StrictMode>
        <ColorModeScript/>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

