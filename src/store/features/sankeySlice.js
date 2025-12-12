import { createSlice } from '@reduxjs/toolkit'
import SankeyInitialState from '../state/SankeyInitialState'

export const sankeySlice = createSlice({
    name: "sankey",
    initialState: SankeyInitialState,
    reducers: {
        showAllChanges: state => {
            state.isChangeOnly = false
        },
        showOnlyChange: state => {
            state.isChangeOnly = true
        }
    }
}
)

export const { showAllChanges, showOnlyChange } = sankeySlice.actions

export default sankeySlice.reducer