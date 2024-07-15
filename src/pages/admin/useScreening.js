// useScreening.js

import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs"; // Đảm bảo bạn có file configs chứa apiURL

const useScreening = () => {
  const [screenings, setScreenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchScreenings = async () => {
      try {
        const response = await axios.get(`${apiURL}/screenings`);
        setScreenings(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${apiURL}/mv/movies`);
        setMovies(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchHalls = async () => {
      try {
        const response = await axios.get(`${apiURL}/halls`);
        setHalls(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchScreenings();
    fetchMovies();
    fetchHalls();
  }, []);

  const addScreening = async (data) => {
    try {
      const response = await axios.post(`${apiURL}/screenings`, data);
      setScreenings([...screenings, response.data]); // Thêm lịch chiếu mới vào state local
    } catch (err) {
      throw err;
    }
  };

  const updateScreening = async (id, data) => {
    try {
      await axios.put(`${apiURL}/screenings/${id}`, data);
      const updatedScreenings = screenings.map((screening) =>
        screening._id === id ? { ...screening, ...data } : screening
      );
      setScreenings(updatedScreenings);
    } catch (err) {
      throw err;
    }
  };

  const deleteScreening = async (id) => {
    try {
      await axios.delete(`${apiURL}/screenings/${id}`);
      const filteredScreenings = screenings.filter(
        (screening) => screening._id !== id
      );
      setScreenings(filteredScreenings);
    } catch (err) {
      throw err;
    }
  };

  return {
    screenings,
    movies,
    halls,
    loading,
    error,
    addScreening,
    updateScreening,
    deleteScreening,
  };
};

export default useScreening;
