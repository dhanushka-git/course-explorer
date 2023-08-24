import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    user: () => ({name: 'John Doe'})
})

export default rootReducer