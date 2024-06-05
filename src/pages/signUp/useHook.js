import React from "react";
import { useState } from "react";
import autherServices from "../../services/autherServices";
const useHook = () => {
  const { register } = autherServices();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submit = async () => {
    await register(formData);
  };
  return { handleChange, formData, submit };
};

export default useHook;
