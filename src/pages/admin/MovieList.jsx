import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useMovie from "./useMovie";

const MovieList = () => {
  const { getMovies, movies } = useMovie();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Danh sách phim</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/admin/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/admin/movie/create">Thêm phim mới</Link>
    </div>
  );
};

export default MovieList;
