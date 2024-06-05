import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
      <img
        src={`https://via.placeholder.com/300?text=${movie.title}`}
        alt={movie.title}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-700">{movie.description}</p>
        <div className="flex justify-between mt-4 mx-8">
          <button className="btn btn-primary">Book Now</button>
          <button className="btn btn-active btn-secondary">View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
