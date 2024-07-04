import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../layouts";
import useHookBooking from "./useHookBooking";

const Booking = () => {
  const {
    cinemas,
    halls,
    movies,
    screenings,
    selectedCinema,
    setSelectedCinema,
    selectedHall,
    setSelectedHall,
    selectedMovie,
    setSelectedMovie,
    selectedScreening,
    setSelectedScreening,
    fetchCinemas,
    fetchHalls,
    fetchMovies,
    fetchScreenings,
  } = useHookBooking();
  const { id } = useParams(); // Lấy id của phim từ URL

  useEffect(() => {
    if (id) {
      fetchCinemas(); // Fetch danh sách rạp khi component được mount và id từ URL có sẵn
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Thêm id vào dependency để useEffect được gọi lại khi id thay đổi

  useEffect(() => {
    if (selectedCinema) {
      fetchHalls(selectedCinema);
    }
  }, [selectedCinema]);

  useEffect(() => {
    if (selectedHall) {
      fetchScreenings(selectedHall);
    }
  }, [selectedHall]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Booking Page</h1>

        <div className="mb-4">
          <label htmlFor="cinema" className="block text-lg font-semibold mb-2">
            Select Cinema
          </label>
          <select
            id="cinema"
            className="form-select block w-full"
            value={selectedCinema || ""}
            onChange={(e) => setSelectedCinema(e.target.value)}
          >
            <option value="" disabled>
              Select a cinema
            </option>
            {cinemas.map((cinema) => (
              <option key={cinema._id} value={cinema._id}>
                {cinema.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCinema && (
          <div className="mb-4">
            <label htmlFor="hall" className="block text-lg font-semibold mb-2">
              Select Hall
            </label>
            <select
              id="hall"
              className="form-select block w-full"
              value={selectedHall || ""}
              onChange={(e) => setSelectedHall(e.target.value)}
            >
              <option value="" disabled>
                Select a hall
              </option>
              {halls.map((hall) => (
                <option key={hall._id} value={hall._id}>
                  {hall.hall_number}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedHall && (
          <div className="mb-4">
            <label
              htmlFor="screening"
              className="block text-lg font-semibold mb-2"
            >
              Select Screening
            </label>
            <select
              id="screening"
              className="form-select block w-full"
              value={selectedScreening || ""}
              onChange={(e) => setSelectedScreening(e.target.value)}
            >
              <option value="" disabled>
                Select a screening
              </option>
              {screenings.map((screening) => (
                <option key={screening._id} value={screening._id}>
                  {new Date(screening.start_time).toLocaleString()}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedScreening && (
          <div className="mb-4">
            <label htmlFor="movie" className="block text-lg font-semibold mb-2">
              Select Movie
            </label>
            <select
              id="movie"
              className="form-select block w-full"
              value={selectedMovie || ""}
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              <option value="" disabled>
                Select a movie
              </option>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
