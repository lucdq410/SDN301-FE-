import React, { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovie } from "../../services/useMovie";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 8;

const MoviesPage = () => {
  const { movies, getMovies } = useMovie();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, []);

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, movies.length);
  const currentMovies = movies.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {currentMovies.length === 0 ? (
          <div className="text-center text-gray-700">
            {t("no_movies_available")}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
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
