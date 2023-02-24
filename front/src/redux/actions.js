// import axios from "axios";

import { ORDER, ADD_CHARACTER, DELETE_CHARACTER, FILTER } from "./types.js";

export function addCharacter(char) {
  return {
    type: ADD_CHARACTER,
    payload: char,
  };
}

export function deleteCharacter(id) {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
}

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
