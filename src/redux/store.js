import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice";
import {postReducer} from "./slices/post.slice";



const mainReducer = combineReducers({
    userReducer,
    postReducer
})

const storeSetup = () => configureStore({
    reducer: mainReducer
});

export {storeSetup};