import { createSlice } from "@reduxjs/toolkit";

const initialState = { languages: "en" };
const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { changeLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
