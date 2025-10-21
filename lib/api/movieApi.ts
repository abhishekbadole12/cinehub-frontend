import axios from "axios";

const API_URL = "http://localhost:5000/api"; // backend

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${API_URL}/trending/movie/week`);
  return data.results;
};

export const getMovieDetails = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}`);
  return data;
};