import { createSlice } from "@reduxjs/toolkit";

const generalReducer = createSlice({
    name: "generalDetailsReducer",
    initialState: {
        allNFTs: []
    },
    reducers: {
        setGeneralReducer: (state, action) => {
            state.allNFTs = action.payload.allNFTs;
        },
        resetGeneralReducer: (state) => {
            state.allNFTs = []
        }
    }
})

export default generalReducer.reducer;
export const { setGeneralReducer, resetGeneralReducer } = generalReducer.actions;