import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import axios from "axios";
import { apiURL } from "../../configs";

const SeatList = () => {
  const { hall_Id } = useParams();
  const [seats, setSeats] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    seat_number: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    is_available: { value: null, matchMode: FilterMatchMode.EQUALS },
    price: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    axios
      .get(`${apiURL}/halls/${hall_Id}/seats`)
      .then((response) => {
        console.log(response.data.data); // Kiểm tra dữ liệu nhận được từ API
        if (Array.isArray(response.data.data)) {
          setSeats(response.data.data);
        } else {
          console.error("Error: data received is not an array");
        }
      })
      .catch((error) => console.error("Error fetching seats:", error));
  }, [hall_Id]);

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
          rowData.is_available ? "p-tag-success" : "p-tag-danger"
        }`}
      >
        {rowData.is_available ? "available" : "unavailable"}
      </span>
    );
  };

  const priceBodyTemplate = (rowData) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(rowData.price);
  };

  const header = renderHeader();

  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-4">Seats for Hall {hall_Id}</h1>
      <DataTable
        value={seats}
        paginator
        rows={10}
        dataKey="_id"
        filters={filters}
        filterDisplay="row"
        globalFilterFields={["seat_number", "is_available", "price"]}
        header={header}
        emptyMessage="No seats found."
        className="p-datatable-customer min-w-screen"
      >
        <Column
          field="seat_number"
          header="Seat Number"
          filter
          filterPlaceholder="Search by seat number"
          sortable
          style={{ minWidth: "12rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="is_available"
          header="Status"
          body={statusBodyTemplate}
          filter
          filterPlaceholder="Search by status"
          sortable
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
        />
        <Column
          field="price"
          header="Price"
          body={priceBodyTemplate}
          filter
          filterPlaceholder="Search by price"
          sortable
          style={{ minWidth: "10rem" }}
          className="p-text-uppercase"
        />
        <Column
          header="Actions"
          body={() => (
            <Button
              icon="pi pi-pencil"
              rounded
              className="p-button-text text-white bg-blue-600"
            />
          )}
          style={{ minWidth: "10rem" }}
        />
      </DataTable>
    </div>
  );
};

export default SeatList;
