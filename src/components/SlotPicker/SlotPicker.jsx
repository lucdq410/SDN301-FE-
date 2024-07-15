import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSlotPickers from "./useSlotPickers";
import { useTranslation } from "react-i18next";
import { Footer, Header } from "../../layouts";
import axios from "axios";

const SlotPicker = () => {
  const { t } = useTranslation();
  const { screening_id } = useParams();
  const { slotPickers, loading, error } = useSlotPickers(screening_id);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSeatClick = (slotPicker) => {
    if (!slotPicker.is_available) return;

    if (selectedSeats.some((seat) => seat._id === slotPicker._id)) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat._id !== slotPicker._id)
      );
    } else {
      setSelectedSeats([...selectedSeats, slotPicker]);
    }
  };

  const handleBooking = async () => {
    if (selectedSeats.length === 0) return;

    try {
      const ticketData = selectedSeats.map((seat) => ({
        slotPicker_id: seat._id,
        user_id: "user_id_here", // Replace with actual user ID logic
        seat_number: seat.seat_number,
        price: seat.price,
      }));

      const response = await axios.post("/api/tickets", ticketData);
      if (response.data.isSuccess) {
        setBookingConfirmed(true);
        setSelectedSeats([]);
        // Optionally, you can update state or handle UI changes upon successful booking
      } else {
        // Handle error scenario if needed
      }
    } catch (error) {
      console.error("Error booking tickets:", error);
      // Handle error scenario
    }
  };

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div>{t("error")}</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-5 grid grid-cols-10 gap-4">
        <div className="col-span-8">
          <h1 className="text-2xl font-bold mb-4">{t("select_seats")}</h1>
          <div className="grid grid-cols-10 gap-4">
            {slotPickers.map((slotPicker, index) => (
              <div
                key={slotPicker._id}
                className={`p-4 border rounded ${
                  slotPicker.is_available
                    ? "bg-green-200 cursor-pointer"
                    : "bg-red-200"
                } ${
                  selectedSeats.some((seat) => seat._id === slotPicker._id)
                    ? "border-blue-500"
                    : ""
                }`}
                onClick={() => handleSeatClick(slotPicker)}
              >
                <p className="text-center">{index + 1}</p>
              </div>
            ))}
          </div>
          <button
            className="btn btn-primary mt-4"
            onClick={handleBooking}
            disabled={selectedSeats.length === 0 || bookingConfirmed}
          >
            {t("book_now")}
          </button>
        </div>
        <div className="col-span-2">
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{t("selected_tickets")}</h2>
            {selectedSeats.map((seat) => (
              <div key={seat._id} className="mb-2">
                <p>{`${t("seat_number")}: ${seat.seat_number}`}</p>
                <p>{`${t("price")}: ${seat.price}`}</p>
                {/* Add additional information as needed */}
              </div>
            ))}
            {bookingConfirmed && (
              <button className="btn btn-primary mt-2" disabled>
                {t("booking_confirmed")}
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SlotPicker;
