
import {configureStore} from "@reduxjs/toolkit";
import courseReducer from "../features/courses/courseSlice";

const store = configureStore({
    reducer:{
        courses: courseReducer
    }
})

export default store;