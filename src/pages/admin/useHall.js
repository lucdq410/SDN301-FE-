import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs";

const useHall = () => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHalls = async () => {
    try {
      const response = await axios.get(`${apiURL}/halls`);
      setHalls(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addHall = async (newHall) => {
    try {
      const response = await axios.post(`${apiURL}/halls`, newHall);
      setHalls([...halls, response.data.data]);
    } catch (err) {
      setError(err);
    }
  };

  const updateHall = async (id, updatedHall) => {
    try {
      const response = await axios.put(`${apiURL}/halls/${id}`, updatedHall);
      setHalls(
        halls.map((hall) => (hall._id === id ? response.data.data : hall))
      );
    } catch (err) {
      setError(err);
    }
  };

  const deleteHall = async (id) => {
    try {
      await axios.delete(`${apiURL}/halls/${id}`);
      setHalls(halls.filter((hall) => hall._id !== id));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchHalls();
  }, []);

  return { halls, loading, error, addHall, updateHall, deleteHall };
};

export default useHall;
