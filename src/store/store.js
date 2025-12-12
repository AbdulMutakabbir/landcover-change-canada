import { configureStore } from "@reduxjs/toolkit";
import sankeyReducer from "./features/sankeySlice";
import donutGrowthReducer from "./features/donotGrowthSlice";

export const store = configureStore({
  reducer: {
    sankey: sankeyReducer,
    donutGrowth: donutGrowthReducer
  }
});
