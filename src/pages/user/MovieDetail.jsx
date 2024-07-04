import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer, Header } from "../../layouts";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <img
          src={`https://via.placeholder.com/300?text=${movie.title}`}
          alt={movie.title}
          className="w-full h-64 object-cover object-center mb-4"
        />
        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p>
          <strong>Duration:</strong> {movie.duration}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
