import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUser } from "../../contexts/userContext";

const Header = () => {
  const { t } = useTranslation();
  const { user, logout } = useUser(); // Sử dụng hook useUser để lấy trạng thái người dùng và hàm logout

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">MovieTicket</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            {t("home")}
          </a>
          <a href="#" className="hover:text-gray-400">
            {t("movie")}
          </a>
          <a href="#" className="hover:text-gray-400">
            {t("showtimes")}
          </a>
          <a href="#" className="hover:text-gray-400">
            {t("contact")}
          </a>
        </nav>
        <div className="flex space-x-4">
          {!user ? ( // Kiểm tra nếu người dùng chưa đăng nhập
            <>
              <Link to="/sign-in">
                <button className="btn btn-outline btn-primary hidden md:inline-block">
                  {t("sgin-in")}
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="btn btn-primary">{t("sign-up")}</button>
              </Link>
            </>
          ) : (
            <>
              {" "}
              {/* Hiển thị tên người dùng và nút "Đăng xuất" nếu đã đăng nhập */}
              <span className="mr-4">{user.name}</span>
              <button onClick={logout} className="btn btn-primary">
                {t("logout")}
              </button>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-gray-400">
            {t("home")}
          </a>
          <a href="#" className="hover:text-gray-400">
            {t("movie")}
          </a>
          <a href="#" className="hover:text-gray-400">
            {t("showtimes")}
          </a>
          <a href="#" className="hover:text-gray-400">
            {t("contact")}
          </a>
          {!user ? ( // Kiểm tra nếu người dùng chưa đăng nhập
            <>
              <Link to="/sign-in">
                <button className="btn btn-outline btn-primary hidden md:inline-block">
                  {t("sgin-in")}
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="btn btn-primary">{t("sign-up")}</button>
              </Link>
            </>
          ) : (
            <>
              {" "}
              {/* Hiển thị tên người dùng và nút "Đăng xuất" nếu đã đăng nhập */}
              <span className="mr-4">{user.name}</span>
              <button onClick={logout} className="btn btn-primary">
                {t("logout")}
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
