import { configureStore } from "@reduxjs/toolkit";
import languagesReducer from "../slice/languages";

const store = configureStore({
  reducer: {
    languages: languagesReducer,
  },
});

export default store;
