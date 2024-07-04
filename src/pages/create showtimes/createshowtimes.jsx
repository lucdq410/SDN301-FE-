// createshowtimes.jsx

import React, { useState, useEffect } from "react";
import { apiURL } from "../../configs";
import axios from "axios";

const CreateShowtimes = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [startTime, setStartTime] = useState("");
  const [hallId, setHallId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch movies when component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${apiURL}/movies`);
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies");
    }
  };

  const handleCreateShowtime = async () => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Showtimes</h1>

      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="movie" className="block text-lg font-semibold mb-2">
          Select Movie
        </label>
        <select
          id="movie"
          className="form-select block w-full"
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option value="">Select a movie</option>
          {movies.map((movie) => (
            <option key={movie._id} value={movie._id}>
              {movie.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="startTime" className="block text-lg font-semibold mb-2">
          Start Time
        </label>
        <input
          type="datetime-local"
          id="startTime"
          className="form-input block w-full"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="hallId" className="block text-lg font-semibold mb-2">
          Hall ID
        </label>
        <input
          type="text"
          id="hallId"
          className="form-input block w-full"
          value={hallId}
          onChange={(e) => setHallId(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCreateShowtime}
      >
        Create Showtime
      </button>
    </div>
  );
};

export default CreateShowtimes;
