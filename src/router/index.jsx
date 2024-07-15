import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomePages, SignIn, SignUp, Hall, HallDetail } from "../pages";
import MovieList from "../pages/admin/MovieList";
import MovieDetail from "../pages/movie/MovieDetail";
import MovieForm from "../pages/admin/MovieForm";
import SeatList from "../pages/admin/SeatList";
import Dashboard from "../pages/admin/Dashboard";
import UserMovieDetail from "../pages/user/MovieDetail";
import PrivateRouteAdmin from "./PrivateRouterAdmin";
import Booking from "../pages/booking/Booking";
import { LayoutManager } from "../layouts";
import Screening from "../pages/admin/Screening";
import SlotPicker from "../pages/admin/SlotPicker";
import ScreeningList from "../components/Screening/ScreeningList";
import SlotPickeruer from "../components/SlotPicker/SlotPicker";

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
        element={
          <PrivateRouteAdmin
            roles={user?.role}
            page={<LayoutManager page={Dashboard} />}
          />
        }
      />
      {/* LayoutManager cho quản lý phim */}
      <Route path="/mv/movies" element={<LayoutManager page={MovieList} />} />
      <Route
        path="/mv/movies/new"
        element={<LayoutManager page={MovieForm} />}
      />
      {/* <Route
        path="/mv/movies/:id"
        element={<LayoutManager page={MovieDetail} />}
      /> */}
      <Route path="/mv/movies/:id" element={<MovieDetail />} />
      <Route
        path="/mv/movies/edit/:id"
        element={<LayoutManager page={MovieForm} />}
      />
      {/* Thêm route cho ScreeningList */}
      <Route
        path="/mv/screenings"
        element={<LayoutManager page={Screening} />}
      />
      <Route
        path="/slotpicker/screening/:screening_id"
        element={<LayoutManager page={SlotPicker} />}
      />
      {/* Các route cho quản lý halls */}
      <Route path="/mv/halls" element={<LayoutManager page={Hall} />} />
      <Route
        path="/halls/:hall_Id/seats"
        element={<LayoutManager page={SeatList} />}
      />
      {/* Route cho người dùng */}
      <Route path="/movies/:id" element={<UserMovieDetail />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/screenings/movie/:movie_id" element={<ScreeningList />} />
      <Route
        path="/slotpicker/screening/:screening_id/list"
        element={<SlotPickeruer />}
      />
    </Routes>
  );
};

export default Router;
