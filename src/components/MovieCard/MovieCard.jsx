import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleViewDetail = () => {
    navigate(`/mv/movies/${movie._id}`);
  };

  const handleBookNow = () => {
    // Logic để đặt vé
    console.log("Book now", movie.id);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-700 h-20 overflow-hidden">
          {movie.description}
        </p>
        <div className="flex justify-end mt-4">
          <button onClick={handleBookNow} className="btn btn-primary mr-2">
            {t("book_now")}
          </button>
          <button
            onClick={handleViewDetail}
            className="btn btn-active btn-secondary"
          >
            {t("view_detail")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
