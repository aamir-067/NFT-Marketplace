import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        temp: {}
    },

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
})