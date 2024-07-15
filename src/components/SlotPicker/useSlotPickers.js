import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs";

const useSlotPickers = (screening_id) => {
  const [slotPickers, setSlotPickers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlotPickers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${apiURL}/slotpicker/screening/${screening_id}`
        );
        if (response.data && response.data.data) {
          setSlotPickers(response.data.data);
        } else {
          setSlotPickers([]);
        }
      } catch (err) {
        setError("Failed to fetch slot pickers");
        console.error("Error fetching slot pickers:", err);
      }
      setLoading(false);
    };

    if (screening_id) {
      fetchSlotPickers();
    }
  }, [screening_id]);

  return { slotPickers, loading, error };
};

export default useSlotPickers;
