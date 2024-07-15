import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs";

const useScreenings = (movie_id) => {
  const [screenings, setScreenings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScreenings = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${apiURL}/screenings/movie/${movie_id}`
        );
        if (response.data && response.data.data) {
          setScreenings(response.data.data);
        } else {
          setScreenings([]);
        }
      } catch (err) {
        setError("Failed to fetch screenings");
        console.error("Error fetching screenings:", err);
      }
      setLoading(false);
    };

    if (movie_id) {
      fetchScreenings();
    }
  }, [movie_id]);

  return { screenings, loading, error };
};

export default useScreenings;
