import { createSlice } from '@reduxjs/toolkit'

const SliceCounter = createSlice({
    name: "Counter",
    initialState: 0,
    reducers: {
        Addition: ((state) => state + 1),
        Substraction: ((state) => state - 1),
        Multiplication: ((state) => state * 2),
        Devision: ((state) => state / 2)
    }
})

export const { Addition, Substraction, Multiplication, Devision } = SliceCounter.actions;
export default SliceCounter.reducer