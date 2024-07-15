// AddScreening.jsx

import React, { useState } from "react";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import useScreening from "./useScreening"; // Import hook useScreening

const AddScreening = ({ visible, onHide, onAddScreening }) => {
  const [newScreening, setNewScreening] = useState({
    movie: null,
    hall: null,
    startTime: "",
  });

  const { movies, halls } = useScreening(); // Lấy danh sách phim và rạp từ hook useScreening

  const handleAddScreening = () => {
    // Gửi dữ liệu theo định dạng yêu cầu
    const formattedData = {
      movie: newScreening.movie._id,
      hall: newScreening.hall._id,
      startTime: newScreening.startTime,
    };
    onAddScreening(formattedData);
    setNewScreening({ movie: null, hall: null, startTime: "" });
    onHide();
  };

  return (
    <Dialog
      visible={visible}
      style={{ width: "450px" }}
      header="Add New Screening"
      modal
      className="p-fluid"
      footer={() => (
        <div>
          <Button
            rounded
            label="Cancel"
            className="text-white bg-red-600 p-2 mr-2"
            onClick={onHide}
          />
          <Button
            rounded
            label="Add Screening"
            className="text-white bg-blue-600 p-2"
            onClick={handleAddScreening}
          />
        </div>
      )}
      onHide={onHide}
    >
      <div className="field">
        <label
          htmlFor="movie"
          className="block text-sm font-medium text-gray-700"
        >
          Movie
        </label>
        <Dropdown
          id="movie"
          value={newScreening.movie}
          optionLabel="title"
          options={movies}
          onChange={(e) => setNewScreening({ ...newScreening, movie: e.value })}
          placeholder="Select a movie"
          className={classNames(
            "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
            { "p-invalid": !newScreening.movie }
          )}
        />
      </div>
      <div className="field mt-4">
        <label
          htmlFor="hall"
          className="block text-sm font-medium text-gray-700"
        >
          Hall
        </label>
        <Dropdown
          id="hall"
          value={newScreening.hall}
          optionLabel="name"
          options={halls}
          onChange={(e) => setNewScreening({ ...newScreening, hall: e.value })}
          placeholder="Select a hall"
          className={classNames(
            "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
            { "p-invalid": !newScreening.hall }
          )}
        />
      </div>
      <div className="field mt-4">
        <label
          htmlFor="startTime"
          className="block text-sm font-medium text-gray-700"
        >
          Start Time
        </label>
        <Calendar
          id="startTime"
          value={newScreening.startTime}
          onChange={(e) =>
            setNewScreening({ ...newScreening, startTime: e.value })
          }
          showTime
          dateFormat="yy-mm-dd"
          hourFormat="24"
          showIcon
          className={classNames(
            "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
            { "p-invalid": !newScreening.startTime }
          )}
        />
      </div>
    </Dialog>
  );
};

export default AddScreening;
