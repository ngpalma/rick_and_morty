// import axios from "axios";

import { ADD_CHARACTER, DELETE_CHARACTER, GET_CHAR_NAME } from "./types";

export function addCharacter(id) {
  return {
    type: ADD_CHARACTER,
    payload: id,
  };
}

export function deleteCharacter(id) {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
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
