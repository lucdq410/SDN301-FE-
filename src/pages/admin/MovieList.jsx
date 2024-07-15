import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMovie } from "./useMovie";
import { useTranslation } from "react-i18next";

const MovieList = () => {
  const { t } = useTranslation();
  const { movies, getMovies, deleteMovie } = useMovie();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">{t("movieList")}</h1>
        <Link to="/mv/movies/new" className="btn btn-primary">
          {t("addMovie")}
        </Link>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>{t("no")}</th>
            <th>{t("poster")}</th>
            <th>{t("title")}</th>
            <th>{t("genre")}</th>
            <th>{t("duration")}</th>
            <th>{t("releaseDate")}</th>
            <th>{t("director")}</th>
            <th>{t("description")}</th>
            <th>{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.duration}</td>
              <td>{new Date(movie.release_date).toLocaleDateString()}</td>
              <td>{movie.director}</td>
              <td>{movie.description}</td>
              <td>
                <div className="flex space-x-2">
                  <Link to={`/mv/movies/${movie._id}`} className="btn btn-info">
                    {t("details")}
                  </Link>
                  <Link
                    to={`/mv/movies/edit/${movie._id}`}
                    className="btn btn-warning"
                  >
                    {t("edit")}
                  </Link>
                  <button
                    onClick={() => deleteMovie(movie._id)}
                    className="btn btn-error"
                  >
                    {t("delete")}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
