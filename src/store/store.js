import { configureStore, combineReducers,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import productReducer from './reducers/ProductSlice'
// import { composeWithDevTools } from 'redux-devtools-extension';
import { devTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    userReducer,
    productReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware()],
        devTools: process.env.NODE_ENV !== 'production' ? devTools : false,
      });
}

