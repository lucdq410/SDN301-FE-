import React, { useEffect, useState } from "react";
import { apiURL } from "../../configs";
import axios from "axios";
import { useSelector } from "react-redux";
const useHook = () => {
  const token = useSelector((state) => state.user.user.token);
  const [tickets, setTickets] = useState([]);
  const fetchTickets = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get(`${apiURL}/tickets/user`);
      if (response.data && response.data.data) setTickets(response.data.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };
  useEffect(() => {
    fetchTickets();
  }, []);
  return { tickets };
};

export default useHook;
