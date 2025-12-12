import { createSlice } from '@reduxjs/toolkit'
import DonutGrowthInitialState from '../state/DonutGrowthInitalState'

export const donutGrowthSlice = createSlice({
    name: "donutGrowth",
    initialState: DonutGrowthInitialState,
    reducers: {
    }
}
)

export const { } = donutGrowthSlice.actions

export default donutGrowthSlice.reducer