import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovie from "./useMovie";

const MovieForm = () => {
  const { id } = useParams();
  const { getMovieById, movie, createMovie, updateMovie } = useMovie();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (id) {
      getMovieById(id);
    }
  }, [id]);

  useEffect(() => {
    if (movie) {
      setFormData(movie);
    }
  }, [movie]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateMovie(id, formData);
    } else {
      createMovie(formData);
    }
  };

  return (
    <div>
      <h1>{id ? "Chỉnh sửa phim" : "Thêm phim mới"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Tên phim"
        />
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          placeholder="Đạo diễn"
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Thể loại"
        />
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Năm sản xuất"
        />
        <button type="submit">{id ? "Cập nhật" : "Thêm mới"}</button>
      </form>
    </div>
  );
};

export default MovieForm;
