import axios from "axios";
import React from "react";
import { apiURL } from "../configs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const autherServices = () => {
  const navigate = useNavigate();
  const api = apiURL + "/auther";

  const register = async (formData) => {
    try {
      const data = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      const response = await axios.post(`${api}/register`, data);
      if (response.data.isSuccess) {
        toast.success(response.data.message);
        navigate("/sign-in");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to call API");
    }
  };

  const login = async (formData) => {
    try {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      const response = await axios.post(`${api}/login`, data);
      if (response.data.isSuccess) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to call API");
    }
  };

  return { register, login };
};

export default autherServices;
