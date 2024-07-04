import React from "react";
import { useMovieForm } from "./useMovieForm";

const MovieForm = () => {
  const { formData, handleChange, handleFileChange, handleSubmit, id, t } =
    useMovieForm();

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">
        {id ? t("editMovie") : t("addMovie")}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={`mb-4 ${!formData.title && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("title")}</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.genre && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("genre")}</span>
          </label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.description && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("description")}</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.duration && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("duration")}</span>
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.release_date && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("releaseDate")}</span>
          </label>
          <input
            type="date"
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.director && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("director")}</span>
          </label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.poster && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("posterLink")}</span>
          </label>
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">{t("selectPoster")}</span>
          </label>
          <input
            type="file"
            name="poster"
            onChange={handleFileChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className={`mb-4 ${!formData.status && "input-error"}`}>
          <label className="label">
            <span className="label-text">{t("status")}</span>
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="upcoming">{t("upcoming")}</option>
            <option value="now_showing">{t("nowShowing")}</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? t("update") : t("add")}
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
