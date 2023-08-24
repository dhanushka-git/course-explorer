
import {configureStore} from "@reduxjs/toolkit";
import courseReducer from "../features/courses/courseSlice";
import {api} from "../features/api/apiSlice";

const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
        courses: courseReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;