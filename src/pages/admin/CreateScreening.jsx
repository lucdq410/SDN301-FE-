// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "primereact/button";
// import { Dropdown } from "primereact/dropdown";
// import { Calendar } from "primereact/calendar";
// import { Toast } from "primereact/toast";
// import useScreening from "./useScreening";

// const CreateScreening = () => {
//   const { movies, halls, loading, error, createScreening } = useScreening();
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [selectedHall, setSelectedHall] = useState(null);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const toast = useRef(null);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     const data = {
//       movie: selectedMovie?._id,
//       hall: selectedHall?._id,
//       startTime: startTime.toISOString(),
//       endTime: endTime.toISOString(),
//     };

//     try {
//       await createScreening(data);
//       toast.current.show({
//         severity: "success",
//         summary: "Success",
//         detail: "Screening created successfully",
//       });
//       navigate("/screenings");
//     } catch (err) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: err.response?.data?.message || "An error occurred",
//       });
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="card">
//       <Toast ref={toast} />
//       <h1 className="text-2xl font-bold mb-4">Create Screening</h1>
//       <div className="p-fluid grid">
//         <div className="field col-12 md:col-6">
//           <label htmlFor="movie">Movie</label>
//           <Dropdown
//             id="movie"
//             value={selectedMovie}
//             options={movies}
//             onChange={(e) => setSelectedMovie(e.value)}
//             optionLabel="title"
//             placeholder="Select a movie"
//           />
//         </div>
//         <div className="field col-12 md:col-6">
//           <label htmlFor="hall">Hall</label>
//           <Dropdown
//             id="hall"
//             value={selectedHall}
//             options={halls}
//             onChange={(e) => setSelectedHall(e.value)}
//             optionLabel="name"
//             placeholder="Select a hall"
//           />
//         </div>
//         <div className="field col-12 md:col-6">
//           <label htmlFor="startTime">Start Time</label>
//           <Calendar
//             id="startTime"
//             value={startTime}
//             onChange={(e) => setStartTime(e.value)}
//             showTime
//             showSeconds
//           />
//         </div>
//         <div className="field col-12 md:col-6">
//           <label htmlFor="endTime">End Time</label>
//           <Calendar
//             id="endTime"
//             value={endTime}
//             onChange={(e) => setEndTime(e.value)}
//             showTime
//             showSeconds
//           />
//         </div>
//         <div className="col-12">
//           <Button label="Create Screening" onClick={handleSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateScreening;
