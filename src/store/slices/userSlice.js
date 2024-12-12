// src/store/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  dateOfBirth: "",
  address: {
    present: "",
    permanent: "",
    city: "",
    postalCode: "",
    country: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    resetUser() {
      return initialState;
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
