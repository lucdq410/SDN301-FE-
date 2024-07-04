import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useHook from "./useHook";

const Header = () => {
  const { languages, handleChangeLanguages, user, logoutHandler } = useHook();
  const option = ["en", "vi"];
  const { t } = useTranslation();

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
        <div className="flex space-x-4 items-center">
          {user === null ? (
            <>
              <Link to="/sign-in">
                <button className="btn btn-outline btn-primary hidden md:inline-block">
                  {t("sign-in")}
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="btn btn-primary">{t("sign-up")}</button>
              </Link>
            </>
          ) : (
            <>
              {user?.role === "admin" && (
                <Link to="/mv/dashboard">
                  <button className="btn btn-outline btn-primary hidden md:inline-block">
                    {t("Admin panel")}
                  </button>
                </Link>
              )}

              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  logoutHandler();
                }}
              >
                {t("logout")}{" "}
                <FontAwesomeIcon icon={faSignOutAlt} className="ml-2" />
              </button>
            </>
          )}
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              <FontAwesomeIcon
                icon={languages === "en" ? "vi" : "en"}
                className="mr-2"
              />
              {languages}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {option.map((lang) => (
                <li key={lang}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleChangeLanguages(lang);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={lang === "en" ? "us" : "vn"}
                      className="mr-2"
                    />
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
          <Link to="/sign-in">
            <button className="btn btn-outline btn-primary hidden md:inline-block">
              {t("sign-in")}
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="btn btn-primary">{t("sign-up")}</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
