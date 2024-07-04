import React from "react";
import store from "../../redux/store/configuration";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/slice/languages";
import { logout } from "../../redux/slice/user";
const useHook = () => {
  const languages = useSelector((state) => state.languages.languages);
  const dispatch = useDispatch();
  const state = store.getState();
  const handleChangeLanguages = (languages) => {
    dispatch(changeLanguage(languages));
  };
  const user = useSelector((state) => state.user.user);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return {
    languages,
    handleChangeLanguages,
    user,
    logoutHandler,
  };
};

export default useHook;
