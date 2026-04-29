import axios from "axios";
import {
  GET_CHARS,
  SET_PAGE,
  SET_FILTERS,
  GET_FAVS,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER_FAVS,
  ORDER_FAVS,
  LOGIN,
  LOGOUT,
  RESTORE_SESSION,
} from "./types";

const API = "http://localhost:3001";

const authHeader = (token) => ({ Authorization: `Bearer ${token}` });

export const getAllCharacters =
  (page = 1, filters = {}, signal = null) =>
  async (dispatch, getState) => {
    const { token } = getState();
    try {
      const params = new URLSearchParams({ page });
      if (filters.name) params.append("name", filters.name);
      if (filters.status) params.append("status", filters.status);
      if (filters.gender) params.append("gender", filters.gender);
      if (filters.species) params.append("species", filters.species);

      const { data } = await axios.get(`${API}/characters?${params}`, {
        headers: authHeader(token),
        signal,
      });
      dispatch({ type: GET_CHARS, payload: data });
      return data;
    } catch (error) {
      if (axios.isCancel(error)) return null;
      console.error("Error al obtener personajes:", error.message);
      return null;
    }
  };

export const setPage = (page) => ({ type: SET_PAGE, payload: page });

export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters });

export const getFavs = () => async (dispatch, getState) => {
  const { token } = getState();
  try {
    const { data } = await axios.get(`${API}/favorites`, {
      headers: authHeader(token),
    });
    dispatch({ type: GET_FAVS, payload: data });
  } catch (error) {
    console.error("Error al obtener favoritos:", error.message);
  }
};

export const addFavorite = (char) => async (dispatch, getState) => {
  const { token } = getState();
  try {
    const { data } = await axios.post(`${API}/favorites`, char, {
      headers: authHeader(token),
    });
    if (data.fav) dispatch({ type: ADD_FAVORITE, payload: data.fav });
  } catch (error) {
    console.error("Error al agregar favorito:", error.message);
  }
};

export const deleteFavorite = (id) => async (dispatch, getState) => {
  const { token } = getState();
  try {
    const { data } = await axios.delete(`${API}/favorites/${id}`, {
      headers: authHeader(token),
    });
    if (data.success) dispatch({ type: DELETE_FAVORITE, payload: id });
  } catch (error) {
    console.error("Error al eliminar favorito:", error.message);
  }
};

export const filterFavs = (value) => ({ type: FILTER_FAVS, payload: value });

export const orderFavs = (value) => ({ type: ORDER_FAVS, payload: value });

export const login = (email, password) => async (dispatch) => {
  const { data } = await axios.post(`${API}/users/login`, { email, password });
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  dispatch({ type: LOGIN, payload: data });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};

export const register = (email, password) => async () => {
  const { data } = await axios.post(`${API}/users/register`, { email, password });
  return data;
};

export const restoreSession = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (token && user) {
    dispatch({ type: RESTORE_SESSION, payload: { token, user: JSON.parse(user) } });
  }
};
