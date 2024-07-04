import React, { useState } from "react";

const SeatItem = ({ seat }) => {
  const [currentSeat, setCurrentSeat] = useState(seat);
  const onChange = (event) => {
    const { name, value } = event.target;
    setCurrentSeat((prevSeat) => ({
      ...prevSeat,
      [name]: value,
    }));
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{seat.id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {currentSeat.seat_number}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          className="input input-bordered w-full"
          name="price"
          type="number"
          onChange={onChange}
          value={currentSeat.price}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className={`absolute inset-0 ${
              seat.is_available
                ? "bg-green-200 opacity-50 rounded-full hover:bg-red-200 "
                : "bg-red-200 opacity-50 rounded-full hover:bg-green-200"
            }`}
          ></span>
          <span className="relative">{`${
            seat.is_available ? "active" : "inactive"
          }`}</span>
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default SeatItem;
