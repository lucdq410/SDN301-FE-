import React, { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import moviesData from "../../data/movies";

const ITEMS_PER_PAGE = 8;

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(moviesData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, moviesData.length);
  const currentMovies = moviesData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`mx-2 px-4 py-2 rounded-full ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
