import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import productReducer from './reducers/ProductSlice'

const rootReducer = combineReducers({
    userReducer,
    productReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}