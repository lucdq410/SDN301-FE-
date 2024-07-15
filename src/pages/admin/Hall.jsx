import React, { useState } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import useHall from "./useHall";
import { useNavigate } from "react-router-dom"; // Import hook useNavigate

const Hall = () => {
  const { halls, loading, error, addHall, deleteHall, updateHall } = useHall();
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    capacity: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [editingHall, setEditingHall] = useState(null);
  const [newHall, setNewHall] = useState({
    name: "",
    capacity: "",
    status: "active",
  });
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const statuses = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleAddHall = () => {
    addHall(newHall);
    setNewHall({ name: "", capacity: "", status: "active" });
    setShowAddPopup(false);
  };

  const handleEdit = (rowData) => {
    setEditingHall({ ...rowData });
    setShowEditPopup(true);
  };

  const handleSaveEdit = () => {
    updateHall(editingHall._id, editingHall);
    setEditingHall(null);
    setShowEditPopup(false);
  };

  const handleViewSeats = (rowData) => {
    navigate(`/halls/${rowData._id}/seats`);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
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

  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`p-tag ${
          rowData.status === "active" ? "p-tag-success" : "p-tag-danger"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  const statusRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterApplyCallback(e.value)}
        placeholder="Select a Status"
        className="p-column-filter"
        showClear
      />
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-4">Halls</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="flex justify-between flex-row-reverse mb-4">
        <Button
          rounded
          label="Add Hall"
          icon="pi pi-plus"
          severity="secondary"
          onClick={() => setShowAddPopup(true)}
          className="mt-4 p-button-success  p-2"
        />
      </div>

      <DataTable
        value={halls}
        paginator
        rows={10}
        dataKey="_id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={["name", "capacity", "status"]}
        header={header}
        emptyMessage="No halls found."
        className="p-datatable-customer min-w-screen"
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "12rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="capacity"
          header="Capacity"
          filter
          filterPlaceholder="Search by capacity"
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          filter
          filterElement={statusRowFilterTemplate}
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
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
                onClick={() => deleteHall(rowData._id)}
              />
              <Button
                icon="pi pi-eye"
                rounded
                className="p-button-text text-white bg-green-500"
                onClick={() => handleViewSeats(rowData)}
              />
            </>
          )}
          style={{ minWidth: "10rem" }}
        />
      </DataTable>

      <Dialog
        visible={showAddPopup}
        style={{ width: "450px" }}
        header="Add New Hall"
        modal
        className="p-fluid"
        footer={() => (
          <div>
            <Button
              rounded
              label="Cancel"
              className="text-white bg-red-600 p-2 mr-2"
              onClick={() => setShowAddPopup(false)}
            />
            <Button
              rounded
              label="Add Hall"
              className="text-white bg-blue-600 p-2"
              onClick={handleAddHall}
            />
          </div>
        )}
        onHide={() => setShowAddPopup(false)}
      >
        <div className="field">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <InputText
            id="name"
            value={newHall.name}
            onChange={(e) => setNewHall({ ...newHall, name: e.target.value })}
            required
            autoFocus
            className={classNames(
              "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
              { "p-invalid": !newHall.name }
            )}
          />
        </div>
        <div className="field mt-4">
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Capacity
          </label>
          <InputText
            id="capacity"
            value={newHall.capacity}
            onChange={(e) =>
              setNewHall({ ...newHall, capacity: e.target.value })
            }
            required
            className={classNames(
              "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
              { "p-invalid": !newHall.capacity }
            )}
          />
        </div>
        <div className="field mt-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <Dropdown
            id="status"
            value={newHall.status}
            options={statuses}
            onChange={(e) => setNewHall({ ...newHall, status: e.target.value })}
            placeholder="Select a Status"
            className="p-inputtext-sm w-full mt-1 border border-gray-300 rounded p-1"
          />
        </div>
      </Dialog>

      <Dialog
        visible={showEditPopup}
        style={{ width: "450px" }}
        header="Edit Hall"
        modal
        className="p-fluid"
        footer={() => (
          <div>
            <Button
              rounded
              label="Cancel"
              className="text-white bg-red-600 p-2 mr-2"
              onClick={() => setShowEditPopup(false)}
            />
            <Button
              rounded
              label="Save"
              className="text-white bg-blue-600 p-2"
              onClick={handleSaveEdit}
            />
          </div>
        )}
        onHide={() => setShowEditPopup(false)}
      >
        {editingHall && (
          <>
            <div className="field">
              <label
                htmlFor="editName"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <InputText
                id="editName"
                value={editingHall.name}
                onChange={(e) =>
                  setEditingHall({ ...editingHall, name: e.target.value })
                }
                required
                autoFocus
                className={classNames(
                  "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
                  { "p-invalid": !editingHall.name }
                )}
              />
            </div>
            <div className="field mt-4">
              <label
                htmlFor="editCapacity"
                className="block text-sm font-medium text-gray-700"
              >
                Capacity
              </label>
              <InputText
                id="editCapacity"
                value={editingHall.capacity}
                onChange={(e) =>
                  setEditingHall({ ...editingHall, capacity: e.target.value })
                }
                required
                className={classNames(
                  "p-inputtext p-component p-filled w-full mt-1 border border-gray-300 rounded p-1",
                  { "p-invalid": !editingHall.capacity }
                )}
              />
            </div>
            <div className="field mt-4">
              <label
                htmlFor="editStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <Dropdown
                id="editStatus"
                value={editingHall.status}
                options={statuses}
                onChange={(e) =>
                  setEditingHall({ ...editingHall, status: e.target.value })
                }
                placeholder="Select a Status"
                className="p-inputtext-sm w-full mt-1 border border-gray-300 rounded p-1"
              />
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Hall;
