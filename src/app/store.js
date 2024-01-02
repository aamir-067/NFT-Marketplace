import { configureStore } from "@reduxjs/toolkit";
import { web3ApiReducer, generalReducer } from "../features";
export const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer,
        generalReducer,

    },

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
})