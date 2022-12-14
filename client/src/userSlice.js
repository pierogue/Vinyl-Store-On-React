import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSet: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { userSet } = userSlice.actions;
export default userSlice.reducer;

