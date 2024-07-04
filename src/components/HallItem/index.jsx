import React, { useState } from "react";
import { Link } from "react-router-dom";

const HallItem = ({ hall }) => {
  const [currentHall, setCurrentHall] = useState(hall);
  const onChange = (event) => {
    const { name, value } = event.target;
    setCurrentHall((prevSeat) => ({
      ...prevSeat,
      [name]: value,
    }));
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{hall.id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          className="input input-bordered w-full"
          name="name"
          type="text"
          onChange={onChange}
          value={currentHall.name}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{hall.capatary}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className={`absolute inset-0 ${
              hall.status === "active"
                ? "bg-green-200 opacity-50 rounded-full hover:bg-red-200 "
                : "bg-red-200 opacity-50 rounded-full hover:bg-green-200"
            }`}
          ></span>
          <span className="relative">{hall.status}</span>
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
        <Link
          to={`${hall.id}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          View detail
        </Link>
      </td>
    </tr>
  );
};

export default HallItem;
