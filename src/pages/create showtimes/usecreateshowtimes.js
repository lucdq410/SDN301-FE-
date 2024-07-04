// usecreateshowtimes.js

import { useState } from "react";
import axios from "axios";
import { apiURL } from "../../configs";

const useCreateShowtimes = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [startTime, setStartTime] = useState("");
  const [hallId, setHallId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${apiURL}/movies`);
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies");
    }
  };

  const createShowtime = async () => {
    try {
      const response = await axios.post(`${apiURL}/showtimes/create`, {
        movieId: selectedMovie,
        startTime: startTime,
        hallId: hallId,
      });
      setSuccessMessage("Showtime created successfully");
      setSelectedMovie("");
      setStartTime("");
      setHallId("");
    } catch (error) {
      console.error("Error creating showtime:", error);
      setErrorMessage("Failed to create showtime");
    }
  };

  return {
    movies,
    selectedMovie,
    setSelectedMovie,
    startTime,
    setStartTime,
    hallId,
    setHallId,
    successMessage,
    errorMessage,
    fetchMovies,
    createShowtime,
  };
};

export default useCreateShowtimes;
