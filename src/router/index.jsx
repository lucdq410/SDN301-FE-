import { Route, Routes } from "react-router-dom";
import React from 'react'
import { HomePages, SignIn, SignUp } from "../pages";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default Router
