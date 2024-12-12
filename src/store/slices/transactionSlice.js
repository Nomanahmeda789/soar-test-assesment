// src/store/slices/transactionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  weeklyActivity: [],
  expenseStats: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    setWeeklyActivity(state, action) {
      state.weeklyActivity = action.payload;
    },
    setExpenseStats(state, action) {
      state.expenseStats = action.payload;
    },
  },
});

export const { setTransactions, setWeeklyActivity, setExpenseStats } =
  transactionSlice.actions;
export default transactionSlice.reducer;
