import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useHook from "./useHook";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { languages, handleChangeLanguages, user, logoutHandler } = useHook();
  const { t } = useTranslation();

  const items = [
    {
      label: t("home"),
      icon: "pi pi-home",
      command: () => {
        window.location.href = "/";
      },
    },
    {
      label: t("movie"),
      icon: "pi pi-video",
      command: () => {
        // Handle navigation to movies page
      },
    },
    {
      label: t("showtimes"),
      icon: "pi pi-clock",
      command: () => {
        // Handle navigation to showtimes page
      },
    },
    {
      label: t("contact"),
      icon: "pi pi-envelope",
      command: () => {
        // Handle navigation to contact page
      },
    },
    user
      ? {
          label: t("logout"),
          icon: "pi pi-sign-out",
          command: () => {
            logoutHandler();
          },
        }
      : {
          label: t("sign-in"),
          icon: "pi pi-user-plus",
          url: "/sign-in",
        },
    {
      label: languages === "en" ? "vi" : "en",
      icon: "pi pi-globe",
      items: [
        {
          label: "English",
          icon: "pi pi-flag",
          command: () => handleChangeLanguages("en"),
        },
        {
          label: "Tiếng Việt",
          icon: "pi pi-flag",
          command: () => handleChangeLanguages("vi"),
        },
      ],
    },
  ];

  // const start = (
  //   <img
  //     alt="MovieTicket Logo"
  //     src="/path/to/your/logo.png" // Replace with your actual logo path
  //     height="40"
  //     className="mr-2"
  //   />
  // );

  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder={t("search")}
        type="text"
        className="w-8rem sm:w-auto"
      />
      {user && (
        <Avatar
          onClick={() => {
            navigate("/profile");
          }}
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
      )}
    </div>
  );

  return (
    <Menubar
      model={items}
      // start={start}
      end={end}
      className="bg-gray-800 text-white py-4"
    />
  );
};

export default Header;
