// src/store/slices/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    addCard(state, action) {
      state.cards.push(action.payload);
    },
  },
});

export const { setCards, addCard } = cardSlice.actions;
export default cardSlice.reducer;
