import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiURL } from "../configs";

export const useMovie = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMovies = async () => {
    try {
      const response = await axios.get(`${apiURL}/mv/movies`);
      if (response.data.isSuccess) {
        setMovies(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch movies");
    }
  };

  const getMovieById = async (id) => {
    try {
      const response = await axios.get(`${apiURL}/mv/movies/${id}`);
      if (response.data.isSuccess) {
        setMovie(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch movie details");
    }
  };

  const createMovie = async (movieData) => {
    try {
      const response = await axios.post(`${apiURL}/mv/movies`, movieData);
      if (response.data.isSuccess) {
        toast.success(response.data.message);
        getMovies();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to create movie");
    }
  };

  const updateMovie = async (id, movieData) => {
    try {
      const response = await axios.put(`${apiURL}/mv/movies/${id}`, movieData);
      if (response.data.isSuccess) {
        toast.success(response.data.message);
        getMovies();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to update movie");
    }
  };

  const deleteMovie = async (id) => {
    try {
      const response = await axios.delete(`${apiURL}/mv/movies/${id}`);
      if (response.data.isSuccess) {
        toast.success(response.data.message);
        getMovies();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to delete movie");
    }
  };

  return {
    movies,
    movie,
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
  };
};
