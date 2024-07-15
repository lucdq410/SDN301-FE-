import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs";
import { useSelector } from "react-redux";

const useSlotPickers = (screening_id) => {
  const [slotPickers, setSlotPickers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.user.token);

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
  useEffect(() => {
    if (screening_id) {
      fetchSlotPickers();
    }
  }, [screening_id]);

  const pickSlots = async (selectedSlots) => {
    console.log("selectedSlots", selectedSlots);
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(`${apiURL}/slotpicker/pick`, {
        screening_id,
        slots: selectedSlots,
      });
      console.log("response", response);
      if (response.data && response.data.isSuccess) {
        fetchSlotPickers();
      }
    } catch (err) {
      console.error("Error picking slots:", err);
    }
    // setSlotPickers((prevSlots) =>
    //   prevSlots.map((slot) =>
    //     selectedSlots.includes(slot._id)
    //       ? { ...slot, is_available: false }
    //       : slot
    //   )
    // );
  };

  return { slotPickers, loading, error, pickSlots };
};

export default useSlotPickers;
