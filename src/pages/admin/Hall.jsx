import React, { useState } from "react";
import { HallItem, Pagination } from "../../components";
import { halls } from "../../data/hall";
const Hall = () => {
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onChangPage = (page) => {
    setCurrentPage(page);
  };
  const [hall, setHall] = useState({
    name: "",
    capacity: "",
    status: "active",
  });
  return (
    <div class="container mx-auto px-4 sm:px-8 flex ">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Hall</h2>
        </div>
        <button
          className="btn"
          onClick={() => document.getElementById("add-hall").showModal()}
        >
          Add Hall
        </button>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {halls.map((hall, index) => (
                  <HallItem key={index} hall={hall} />
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              onChangePage={onChangPage}
            />
          </div>
        </div>
      </div>
      <dialog id="add-hall" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Hall!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <form>
            <div className="my-2">
              <label className="block text-sm">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter hall name"
                value={hall.name}
                onChange={(e) => setHall({ ...hall, name: e.target.value })}
              />
            </div>
            <div className="my-2">
              <label className="block text-sm">Capacity</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter hall capacity"
                value={hall.capacity}
                onChange={(e) => setHall({ ...hall, capacity: e.target.value })}
              />
            </div>
            <div className="my-2">
              <label className="block text-sm">Status</label>
              <select
                className="select select-bordered w-full"
                value={hall.status}
                onChange={(e) => setHall({ ...hall, status: e.target.value })}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <button className="btn w-full">Add Hall</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Hall;
