import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMovie } from "../admin/useMovie";
import { useTranslation } from "react-i18next";
import { Footer, Header } from "../../layouts";

const MovieDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { movie, getMovieById } = useMovie();

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  if (!movie) return <div>{t("loading")}</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-4">{t("movieDetail")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={movie.poster} alt={movie.title} className="rounded-lg" />
          </div>
          <div>
            <p>
              <strong>{t("title")}:</strong> {movie.title}
            </p>
            <p>
              <strong>{t("genre")}:</strong> {movie.genre}
            </p>
            <p>
              <strong>{t("duration")}:</strong> {movie.duration}
            </p>
            <p>
              <strong>{t("releaseDate")}:</strong> {movie.release_date}
            </p>
            <p>
              <strong>{t("director")}:</strong> {movie.director}
            </p>
            <p>
              <strong>{t("description")}:</strong> {movie.description}
            </p>
            {/* Update the Link to direct to the booking page */}
            <Link
              to={`/screenings/movie/${id}`}
              className="btn btn-primary mt-4 mr-4"
            >
              {t("book_now")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
