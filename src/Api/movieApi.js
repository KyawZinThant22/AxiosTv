import axios from "axios";

export const movieAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});