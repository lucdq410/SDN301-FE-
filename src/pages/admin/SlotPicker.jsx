import React from "react";
import { useParams } from "react-router-dom";
import useSlotpicker from "./useSlotpicker";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const SlotPicker = () => {
  const { screening_id } = useParams();
  const { slotPickers, loading, toggleAvailability } =
    useSlotpicker(screening_id);

  console.log("Screening ID:", screening_id);
  console.log("Slot Pickers:", slotPickers);

  const availabilityOptions = [
    { label: "Available", value: true, style: { color: "green" } },
    { label: "Not Available", value: false, style: { color: "red" } },
  ];

  const availabilityBodyTemplate = (rowData) => {
    const option = availabilityOptions.find(
      (opt) => opt.value === rowData.is_available
    );
    return (
      <Dropdown
        value={rowData.is_available}
        options={availabilityOptions}
        onChange={(e) => toggleAvailability(rowData, e.value)}
        optionLabel="label"
        style={option?.style}
        disabled={loading}
      />
    );
  };

  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-4">
        Slot Pickers for Screening {screening_id}
      </h1>
      <DataTable
        value={slotPickers.data} // Ensure you are passing the correct array from the response
        loading={loading}
        paginator
        rows={10}
        className="p-datatable-customer"
        emptyMessage="No slot pickers found."
      >
        <Column field="seat_id" header="Seat ID" sortable />
        <Column
          field="is_available"
          header="Availability"
          body={availabilityBodyTemplate}
          sortable
        />
        <Column
          header="Actions"
          body={(rowData) => (
            <Button
              icon="pi pi-pencil"
              className="p-button-text p-button-success"
              onClick={() => toggleAvailability(rowData, !rowData.is_available)}
              disabled={loading}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default SlotPicker;
