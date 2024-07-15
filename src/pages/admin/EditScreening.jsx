// EditScreening.jsx

import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import useScreening from "./useScreening"; // Import hook useScreening

const EditScreening = ({ visible, onHide, screening, onSaveEdit }) => {
  const [editedScreening, setEditedScreening] = useState({
    movie: null,
    hall: null,
    startTime: null,
  });
  const { movies, halls } = useScreening(); // Lấy danh sách phim và rạp từ hook useScreening

  useEffect(() => {
    if (screening) {
      setEditedScreening({
        movie: movies.find((m) => m._id === screening.movie._id) || null,
        hall: halls.find((h) => h._id === screening.hall._id) || null,
        startTime: new Date(screening.startTime),
      });
    }
  }, [screening, movies, halls]);

  const handleSave = () => {
    onSaveEdit(editedScreening);
    onHide();
  };

  return (
    <Dialog
      visible={visible}
      style={{ width: "450px" }}
      header="Edit Screening"
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
            label="Save"
            className="text-white bg-blue-600 p-2"
            onClick={handleSave}
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
          value={editedScreening.movie}
          optionLabel="title"
          options={movies}
          onChange={(e) =>
            setEditedScreening({ ...editedScreening, movie: e.value })
          }
          placeholder="Select a movie"
          className={classNames(
            "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
            { "p-invalid": !editedScreening.movie }
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
          value={editedScreening.hall}
          optionLabel="name"
          options={halls}
          onChange={(e) =>
            setEditedScreening({ ...editedScreening, hall: e.value })
          }
          placeholder="Select a hall"
          className={classNames(
            "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
            { "p-invalid": !editedScreening.hall }
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
          value={editedScreening.startTime}
          onChange={(e) =>
            setEditedScreening({ ...editedScreening, startTime: e.value })
          }
          showTime
          hourFormat="24"
          dateFormat="dd/mm/yy"
          showIcon
          className={classNames(
            "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
            { "p-invalid": !editedScreening.startTime }
          )}
        />
      </div>
    </Dialog>
  );
};

export default EditScreening;
