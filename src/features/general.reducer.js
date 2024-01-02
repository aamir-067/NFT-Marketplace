import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    nftCount: 0,
    allNFTs: [],
}


const generalReducer = createSlice({
    name: "generalDetailsReducer",
    initialState,
    reducers: {
        setGeneralReducer: (state, action) => {
            state.nftCount = action.payload.nftCount;
            state.allNFTs = action.payload.allNFTs;
        },
        resetGeneralReducer: (state) => {
            state.nftCount = 0;
            state.allNFTs = []
        }
    }
})

export default generalReducer;
export const { setGeneralReducer, resetGeneralReducer } = generalReducer.actions;