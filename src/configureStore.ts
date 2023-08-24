import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";

export default function configureStore(preloadedState?: any) {
    const middlewares: any[] = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers: any = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers: any = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}