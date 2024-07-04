// signIn/useHook.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import autherServices from "../../services/autherServices";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/user";
const useHook = () => {
  const { login: loginService } = autherServices();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    try {
      const response = await loginService(formData);
      if (response) {
        dispatch(login(response.data.data));
      } else {
        // Xử lý lỗi nếu đăng nhập không thành công
        console.error(response.data.message);
      }
    } catch (error) {
      // Xử lý lỗi nếu có lỗi xảy ra khi gọi API
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return { handleChange, formData, submit };
};

export default useHook;
