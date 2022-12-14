import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authSet: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { authSet } = authSlice.actions;
export default authSlice.reducer;