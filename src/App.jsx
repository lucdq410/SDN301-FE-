import React from "react";
import Router from "./router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./resource/translate";
import { Provider } from "react-redux";
import store from "./redux/store/configuration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { UserProvider } from "./contexts/userContext";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        {/* <UserProvider> */}
        <ToastContainer />
        <Router />
        {/* </UserProvider> */}
      </Provider>
    </div>
  );
};

export default App;
