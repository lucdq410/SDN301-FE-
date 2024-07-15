import React from "react";
import Router from "./router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./resource/translate";
import { Provider } from "react-redux";
import store from "./redux/store/configuration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrimeReactProvider } from "primereact/api";
// import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primereact/resources/themes/lara-light-cyan/theme.css";

const App = () => {
  return (
    <PrimeReactProvider>
      <div>
        <Provider store={store}>
          <ToastContainer />
          <Router />
        </Provider>
      </div>
    </PrimeReactProvider>
  );
};

export default App;
