import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "./useMovie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import uploadimage from "../../utils/uploadimage";

export const useMovieForm = () => {
  const { uploadImage } = uploadimage();
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { movie, getMovieById, createMovie, updateMovie } = useMovie();
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    description: "",
    duration: "",
    release_date: "",
    director: "",
    poster: "",
    status: "upcoming", // Default status for new movies
  });

  useEffect(() => {
    if (id) {
      getMovieById(id).then((data) => setFormData(data));
    }
  }, [id, getMovieById]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      poster: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.genre ||
      !formData.description ||
      !formData.duration ||
      !formData.release_date ||
      !formData.director ||
      !formData.poster
    ) {
      toast.error(t("pleaseFillAllFields"));
      return;
    }

    if (id) {
      await updateMovie(id, formData);
    } else {
      formData.poster = await uploadImage(formData.poster);
      await createMovie(formData);
    }
    navigate("/admin/movies");
  };

  return {
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    id,
    t,
  };
};
