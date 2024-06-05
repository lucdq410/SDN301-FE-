// signIn/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useHook from "./useHook";

const SignIn = () => {
  const { t } = useTranslation();
  const { handleChange, formData, submit } = useHook();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("sign-in")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              {t("password")}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            {t("sign-in")}
          </button>
          <div className="flex justify-between mt-4">
            <Link to="/">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
              >
                {t("cancel")}
              </button>
            </Link>
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              {t("not-have-an-account")}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
