import { configureStore } from "@reduxjs/toolkit";
import languagesReducer from "../slice/languages";
import userReducer from "../slice/user";

// Tạo Redux store với trạng thái khởi tạo từ localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    languages: languagesReducer,
    user: userReducer,
  },
  preloadedState,
});

function loadState() {
  try {
    const reduxState = localStorage.getItem("reduxState");
    if (reduxState === null) {
      return undefined;
    }
    return JSON.parse(reduxState);
  } catch (error) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const reduxState = JSON.stringify(state);
    localStorage.setItem("reduxState", reduxState);
  } catch (error) {}
}

// Lắng nghe các thay đổi trong store và lưu vào localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
