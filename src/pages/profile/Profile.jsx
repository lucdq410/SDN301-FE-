import React from "react";
import { Footer, Header } from "../../layouts";
import useHook from "./useHook";

const Profile = () => {
  const { tickets } = useHook();
  return (
    <div>
      <Header />
      <h1>Profile</h1>

      <div>
        <h2>Ticket</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Film</th>
                <th>Start</th>
                <th>End</th>
                <td>Hall</td>
                <th>Seat</th>
                <th>Price</th>
                <td>Purchase date</td>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr className="bg-base-200">
                  <th>{index}</th>
                  <td>{ticket.slotPicker_id.screening_id.movie.title}</td>
                  <td>{ticket.slotPicker_id.screening_id.startTime}</td>
                  <td>{ticket.slotPicker_id.screening_id.endTime}</td>
                  <td>{ticket.slotPicker_id.seat_id.hall_id.name}</td>
                  <td>{ticket.slotPicker_id.seat_id.seat_number}</td>
                  <td>{ticket.slotPicker_id.seat_id.price}</td>
                  <td>{ticket.purchase_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
