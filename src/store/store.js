// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cardReducer from "./slices/cardSlice";
import transactionReducer from "./slices/transactionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardReducer,
    transactions: transactionReducer,
  },
});

export default store;
