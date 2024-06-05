import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovie from "./useMovie";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, movie, deleteMovie } = useMovie();

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  const handleDelete = () => {
    deleteMovie(id);
  };

  return (
    <div>
      <h1>Chi tiết phim</h1>
      <h2>{movie.title}</h2>
      <p>Đạo diễn: {movie.director}</p>
      <p>Thể loại: {movie.genre}</p>
      <p>Năm sản xuất: {movie.year}</p>
      <button onClick={handleDelete}>Xóa phim</button>
    </div>
  );
};

export default MovieDetail;
