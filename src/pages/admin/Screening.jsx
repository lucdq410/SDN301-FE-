import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import hook useNavigate
import AddScreening from "./AddScreening"; // Import AddScreening component
import EditScreening from "./EditScreening"; // Import EditScreening component
import useScreening from "./useScreening"; // Import hook useScreening
import SlotPicker from "./SlotPicker";
const Screening = () => {
  const {
    screenings,
    loading,
    error,
    addScreening,
    deleteScreening,
    updateScreening,
  } = useScreening();
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    // Add more filters as needed
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [editingScreening, setEditingScreening] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleAddScreening = (newScreening) => {
    addScreening(newScreening);
    setShowAddPopup(false);
  };

  const handleEdit = (rowData) => {
    setEditingScreening({ ...rowData });
    setShowEditPopup(true);
  };

  const handleSaveEdit = (editedScreening) => {
    updateScreening(editedScreening._id, editedScreening);
    setEditingScreening(null);
    setShowEditPopup(false);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const calculateDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = Math.abs(end - start) / 1000; // in seconds
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);

    return `${hours}h ${minutes}m`;
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            className="p-inputtext-sm border border-gray-300 rounded"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  const viewSlotPicker = (rowData) => {
    navigate(`/slotpicker/screening/${rowData._id}`);
    console.log("rowData: ", rowData._id);
  };

  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-4">Screenings</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="flex justify-between flex-row-reverse mb-4">
        <Button
          rounded
          label="Add Screening"
          icon="pi pi-plus"
          severity="secondary"
          onClick={() => setShowAddPopup(true)}
          className="mt-4 p-button-success  p-2"
        />
      </div>

      <DataTable
        value={screenings}
        paginator
        rows={10}
        dataKey="_id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={[
          "movie.title",
          "hall.name",
          "startTime",
          "endTime",
        ]}
        header={header}
        emptyMessage="No screenings found."
        className="p-datatable-customer min-w-screen"
      >
        <Column
          field="movie.title"
          header="Movie"
          filter
          filterPlaceholder="Search by movie"
          style={{ minWidth: "12rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="hall.name"
          header="Hall"
          filter
          filterPlaceholder="Search by hall"
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="startTime"
          header="Start Time"
          filter
          filterPlaceholder="Search by start time"
          body={(rowData) => (
            <span>
              {new Date(rowData.startTime).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              {new Date(rowData.startTime).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </span>
          )}
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="endTime"
          header="End Time"
          filter
          filterPlaceholder="Search by end time"
          body={(rowData) => (
            <span>
              {new Date(rowData.endTime).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              {new Date(rowData.endTime).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </span>
          )}
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
        />
        <Column
          header="Duration"
          body={(rowData) => (
            <span>{calculateDuration(rowData.startTime, rowData.endTime)}</span>
          )}
          style={{ minWidth: "8rem" }}
        />
        <Column
          header="Actions"
          body={(rowData) => (
            <>
              <Button
                icon="pi pi-pencil"
                rounded
                className="p-button-text text-white bg-blue-600 mr-2"
                onClick={() => handleEdit(rowData)}
              />
              <Button
                icon="pi pi-trash"
                rounded
                className="p-button-text p-button-danger text-white bg-red-500"
                onClick={() => deleteScreening(rowData._id)}
              />
              {/* <Button
                label="View Slot Picker"
                icon="pi pi-arrow-right"
                rounded
                className="p-button-text text-white bg-indigo-500"
                onClick={() => viewSlotPicker(rowData)}
              /> */}
              <Button
                icon="pi pi-eye"
                rounded
                className="p-button-text text-white bg-green-500"
                onClick={() => viewSlotPicker(rowData)}
              />
            </>
          )}
          style={{ minWidth: "10rem" }}
        />
      </DataTable>

      <AddScreening
        visible={showAddPopup}
        onHide={() => setShowAddPopup(false)}
        onAddScreening={handleAddScreening}
      />

      <EditScreening
        visible={showEditPopup}
        onHide={() => setShowEditPopup(false)}
        screening={editingScreening}
        onSaveEdit={handleSaveEdit}
      />
    </div>
  );
};

export default Screening;
