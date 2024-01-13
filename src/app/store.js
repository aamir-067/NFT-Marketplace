import { configureStore } from "@reduxjs/toolkit";
import web3ApiReducer from "../features/web3Api.reducer";
import generalReducer from "../features/general.reducer";

export const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer,

        general: generalReducer,
    },

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
})