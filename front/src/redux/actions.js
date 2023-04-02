import {
  GET_CHARS,
  ORDER,
  ADD_CHARACTER,
  DELETE_CHARACTER,
  FILTER,
  LOGIN,
} from "./types.js";

export function addCharacter(char, idUser) {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `http://localhost:3001/rickandmorty/fav?idUser=${idUser}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(char),
        }
      ).then((response) => response.json());
      if (data) dispatch({ type: ADD_CHARACTER, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function deleteCharacter(id, idUser) {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `http://localhost:3001/rickandmorty/fav/${id}?idUser=${idUser}`,
        {
          method: "DELETE",
        }
      ).then((response) => response.json());
      if (data.success) dispatch({ type: DELETE_CHARACTER, payload: id });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getFavs(idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `http://localhost:3001/rickandmorty/fav?idUser=${idUser}`
      ).then((response) => response.json());
      if (data) dispatch({ type: GET_CHARS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const obj = await fetch(
        `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}}`
      ).then((response) => response.json());
      if (obj.access) dispatch({ type: LOGIN, payload: obj.id });
    } catch (error) {
      console.error(error);
    }
  };
}

// export function addCharacter(char) {
//   return {
//     type: ADD_CHARACTER,
//     payload: char,
//   };
// }

// export function deleteCharacter(id) {
//   return {
//     type: DELETE_CHARACTER,
//     payload: id,
//   };
// }
