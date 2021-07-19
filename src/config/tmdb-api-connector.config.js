import axios from "axios";

export const GENRES = {
  COMEDY: 35,
  SCIENCE_FICTION: 878,
  WESTERN: 37,
};

export const getGenreName = (genreId) =>
  Object.entries(GENRES)
    .find(([, id]) => id === parseInt(genreId))[0]
    ?.toLowerCase()
    ?.replaceAll("_", "-");

export default axios.create({
  baseURL: process.env.TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
  params: {
    api_key: process.env.TMDB_API_TOKEN,
    language: "en-US",
  },
});
