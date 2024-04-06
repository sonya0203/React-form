import { createSlice } from "@reduxjs/toolkit";



const IncSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        Increment(state, action) {
            return state + 1

        },
        Decrement(state, action) {
            return state - 1

        }

    }
})
export const { Increment, Decrement } = IncSlice.actions
export default IncSlice.reducer