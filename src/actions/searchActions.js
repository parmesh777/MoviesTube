import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";
import { APIKEY } from "../APIKey";
export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${text}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data,
      })
    )
    .catch((err) => `There is NO data ${err}`);
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data,
      })
    )
    .catch((err) => `There is NO data ${err}`);
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
