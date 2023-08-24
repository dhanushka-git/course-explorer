import rootReducer from "./reducers";
import loggerMiddleware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

export default function configureAppStore(preloadedState?: any) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [monitorReducerEnhancer]
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}