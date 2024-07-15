import React from "react";
import { useParams, Link } from "react-router-dom";
import useScreenings from "./useScreenings";
import { useTranslation } from "react-i18next";
import { Footer, Header } from "../../layouts";

const ScreeningList = () => {
  const { t } = useTranslation();
  const { movie_id } = useParams(); // Đảm bảo rằng `movie_id` là đúng với params từ URL
  const { screenings, loading, error } = useScreenings(movie_id);

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div>{t("error")}</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-4">{t("screeningList")}</h1>
        {screenings.length === 0 ? (
          <div>{t("no_screenings")}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {screenings.map((screening) => (
              <div
                key={screening._id}
                className="card bg-white rounded-lg shadow-lg p-4"
              >
                <h2 className="text-xl font-bold">{screening.movie.title}</h2>
                <p>
                  <strong>{t("date_time")}:</strong>{" "}
                  {new Date(screening.startTime).toLocaleString()}
                </p>
                <p>
                  <strong>{t("hall")}:</strong> {screening.hall.name}
                </p>
                <Link
                  to={`/slotpicker/screening/${screening._id}/list`} // Đảm bảo rằng `screening._id` là đúng
                  className="btn btn-primary mt-4"
                >
                  {t("book_now")}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ScreeningList;
