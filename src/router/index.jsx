import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { HomePages, SignIn, SignUp } from "../pages";
import MovieList from "../pages/admin/MovieList";
import MovieDetail from "../pages/movie/MovieDetail";
import MovieForm from "../pages/admin/MovieForm";
import Dashboard from "../pages/admin/Dashboard";
import UserMovieDetail from "../pages/user/MovieDetail";
import PrivateRouteAdmin from "./PrivateRouterAdmin";
import Booking from "../pages/booking/Booking";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route
        path="/sign-in"
        element={user === null ? <SignIn /> : <Navigate to="/" />}
      />
      <Route path="/sign-up" element={<SignUp />} />

      {/* Route chỉ dành cho quản trị viên */}
      <Route
        path="/mv/dashboard"
        element={<PrivateRouteAdmin roles={user?.role} page={<Dashboard />} />}
      />

      {/* Các route cho quản lý phim */}
      <Route path="/mv/movies" element={<MovieList />} />
      <Route path="/mv/movies/new" element={<MovieForm />} />
      <Route path="/mv/movies/:id" element={<MovieDetail />} />
      <Route path="/mv/movies/edit/:id" element={<MovieForm />} />

      {/* Route cho người dùng */}
      <Route path="/movies/:id" element={<UserMovieDetail />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default Router;
