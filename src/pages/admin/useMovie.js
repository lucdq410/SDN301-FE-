import { useState } from "react";
import axios from "axios";

const useMovie = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMovies = async () => {
    try {
      const response = await axios.get("/api/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const getMovieById = async id => {
    try {
      const response = await axios.get(`/api/movies/${id}`);
      setMovie
