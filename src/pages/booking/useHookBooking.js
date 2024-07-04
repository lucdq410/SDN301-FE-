import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiURL } from "../../configs";

const useHookBooking = () => {
  const [cinemas, setCinemas] = useState([]);
  const [halls, setHalls] = useState([]);
  const [movies, setMovies] = useState([]);
  const [screenings, setScreenings] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedScreening, setSelectedScreening] = useState(null);

  const fetchCinemas = async () => {
    try {
      const response = await axios.get(`${apiURL}/booking/cinemas`);
      setCinemas(response.data);
    } catch (error) {
      console.error("Error fetching cinemas:", error);
      toast.error("Failed to fetch cinemas");
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${apiURL}/booking/movies`);
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      toast.error("Failed to fetch movies");
    }
  };

  const fetchHalls = async (cinemaId) => {
    try {
      const response = await axios.get(
        `${apiURL}/booking/cinemas/${cinemaId}/halls`
      );
      setHalls(response.data);
    } catch (error) {
      console.error("Error fetching halls:", error);
      toast.error("Failed to fetch halls");
    }
  };

  const fetchScreenings = async (hallId) => {
    try {
      const response = await axios.get(
        `${apiURL}/booking/halls/${hallId}/screenings`
      );
      setScreenings(response.data);
    } catch (error) {
      console.error("Error fetching screenings:", error);
      toast.error("Failed to fetch screenings");
    }
  };

  return {
    cinemas,
    halls,
    movies,
    screenings,
    selectedCinema,
    setSelectedCinema,
    selectedHall,
    setSelectedHall,
    selectedMovie,
    setSelectedMovie,
    selectedScreening,
    setSelectedScreening,
    fetchCinemas,
    fetchMovies,
    fetchHalls,
    fetchScreenings,
  };
};

export default useHookBooking;
