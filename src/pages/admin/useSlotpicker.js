import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../configs";

const useSlotpicker = (screening_id) => {
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
        setSlotPickers(response.data);
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

  const editSlotPickerAvailability = async (id, newAvailability) => {
    try {
      await axios.patch(`${apiURL}/slotpicker/${id}`, {
        is_available: newAvailability,
      });
      setSlotPickers((prevSlotPickers) => {
        // Ensure prevSlotPickers is always an array
        if (!Array.isArray(prevSlotPickers)) {
          return [];
        }
        return prevSlotPickers.map((picker) =>
          picker._id === id
            ? { ...picker, is_available: newAvailability }
            : picker
        );
      });
    } catch (err) {
      setError("Failed to update slot picker availability");
      console.error("Error editing slot picker availability:", err);
    }
  };

  const toggleAvailability = (rowData) => {
    const newAvailability = !rowData.is_available;
    editSlotPickerAvailability(rowData._id, newAvailability);
  };

  return { slotPickers, loading, error, toggleAvailability };
};

export default useSlotpicker;
