import React, { useState } from "react";
import { hallDetail } from "../../data/hall";
import { Pagination, SeatItem } from "../../components";
import { seats } from "../../data/seat";

const HallDetail = () => {
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onChangPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class="container mx-auto px-4 sm:px-8 flex ">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">
            {hallDetail.name}
          </h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Seat Number
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Price
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {seats.map((seat, index) => (
                  <SeatItem seat={seat} key={index} />
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
    </div>
  );
};

export default HallDetail;
