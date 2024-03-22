import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "add",
    initialState: {
        sum: 0
    },
    reducers: {
        add: (state, action) => {
            state.sum = action.payload.a + action.payload.b;
        },
    }
});
export const { add } = addSlice.actions;
export default addSlice.reducer;

