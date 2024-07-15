import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs";

const useHallDetail = () => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSeats = async (hallId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiURL}/seats?hall_id=${hallId}`);
      setSeats(response.data);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const addSeats = async (newSeats) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiURL}/seats`, newSeats);
      setSeats([...seats, ...response.data]);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add seats");
    } finally {
      setLoading(false);
    }
  };

  const deleteSeat = async (seatId) => {
    setLoading(true);
    try {
      await axios.delete(`${apiURL}/seats/${seatId}`);
      setSeats(seats.filter((seat) => seat._id !== seatId));
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete seat");
    } finally {
      setLoading(false);
    }
  };

  const updateSeat = async (seatId, updatedSeat) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${apiURL}/seats/${seatId}`,
        updatedSeat
      );
      const updatedSeats = seats.map((seat) =>
        seat._id === seatId ? response.data : seat
      );
      setSeats(updatedSeats);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update seat");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hallId) {
      fetchSeats(hallId);
    }
  }, [hallId]);

  return {
    seats,
    loading,
    error,
    addSeats,
    deleteSeat,
    updateSeat,
  };
};

export default useHallDetail;
