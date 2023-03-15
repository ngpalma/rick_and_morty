// import axios from "axios";

import { ORDER, ADD_CHARACTER, DELETE_CHARACTER, FILTER } from "./types.js";

export function addCharacter(char) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/rickandmorty/fav", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(char),
      });
      const data = await response.json();
      dispatch({ type: ADD_CHARACTER, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function deleteCharacter(id) {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:3001/rickandmorty/fav/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: DELETE_CHARACTER, payload: id });
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

export function filterCards(status){
  return {
    type: FILTER,
    payload: status
  }
}

export function orderCards(id){
  return{
    type: ORDER,
    payload: id
  }
}

// export function getCharName() {
//   return function (dispatch) {
//     axios
//       .get("https://rickandmortyapi.com/api/character")
//       .then((r) => r.data.name)
//       .then((d) =>
//         dispatch({
//           type: GET_CHAR_NAME,
//           payload: d,
//         })
//       );
//   };
// }
