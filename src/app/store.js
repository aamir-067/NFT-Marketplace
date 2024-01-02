import { configureStore } from "@reduxjs/toolkit";
import { web3ApiReducer } from "../features";
export const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer
    },

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
})