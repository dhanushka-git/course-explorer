import "./styles/tailwind.css";
import App from "./App";
import * as React from "react"
import store from "./app/store";
import {Provider} from "react-redux";
import * as ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import {ChakraProvider, ColorModeScript, theme} from "@chakra-ui/react"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const renderApp = () =>
    root.render(
        <React.StrictMode>
            <ColorModeScript/>
            <ChakraProvider theme={theme}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ChakraProvider>
        </React.StrictMode>
    )

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

