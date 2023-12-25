import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    provider: null,
    signer: null
}

const web3Api = createSlice({
    name: 'web3Api',
    initialState,
    reducers: {
        initWeb3: (state, action) => {
            state.signer = action.payload.signer;
            state.provider = action.payload.provider;
        },
        resetWeb3: (state, _) => {
            state.signer = null;
            state.provider = null;
        }
    }
})
export const { initWeb3, resetWeb3 } = web3Api.actions;
export default web3Api.reducer;