// signIn/useHook.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import autherServices from "../../services/autherServices";

const useHook = () => {
  const { login: loginService } = autherServices();
  const navigate = useNavigate();

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
      if (response.data.isSuccess) {
        loginUserContext(response.data.user);
        navigate("/"); // Điều hướng người dùng đến trang chủ hoặc trang mong muốn sau khi đăng nhập thành công
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
