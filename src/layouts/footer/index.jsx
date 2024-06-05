import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-xl font-bold">MovieTicket</h2>
            <p className="mt-2">Địa chỉ: 123 Đường ABC, Quận 1, TP. HCM</p>
            <p>Email: lucdq410@gmail.com</p>
            <p>Điện thoại: 0123 456 789</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <h2 className="text-xl font-bold">Về chúng tôi</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <h2 className="text-xl font-bold">Kết nối với chúng tôi</h2>
            <div className="flex justify-center md:justify-end mt-2">
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 MovieTicket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
