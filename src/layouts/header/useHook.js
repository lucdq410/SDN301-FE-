import React from "react";
import store from "../../redux/store/configuration";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/slice/languages";

const useHook = () => {
  const languages = useSelector((state) => state.languages.languages);
  const dispatch = useDispatch();
  const state = store.getState();
  const handleChangeLanguages = (languages) => {
    dispatch(changeLanguage(languages));
  };
  return {
    languages,
    handleChangeLanguages,
  };
};

export default useHook;
