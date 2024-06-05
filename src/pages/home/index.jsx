import React from "react";
import { Footer, Header } from "../../layouts";
import MoviesPage from "../../components/moviespages/MoviesPage";

const HomePages = () => {
  return (
    <div>
      <Header />
      <MoviesPage/>
      <Footer />
    </div>
  );
};

export default HomePages;
