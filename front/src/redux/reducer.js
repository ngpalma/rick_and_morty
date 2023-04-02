import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  FILTER,
  ORDER,
  LOGIN,
  GET_CHARS,
} from "./types.js";

const initialState = {
  idUser: 0,
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARS:
      return {
        ...state,
        allCharacters: [...payload],
        myFavorites: [...payload],
      };
    case ADD_CHARACTER:
      const addFavorites = [...state.allCharacters, payload];
      return {
        ...state,
        allCharacters: [...addFavorites],
        myFavorites: [...addFavorites],
      };
    case DELETE_CHARACTER:
      const deleteFavorites = state.allCharacters.filter(
        (ele) => ele.id !== payload
      );
      return {
        ...state,
        allCharacters: [...deleteFavorites],
        myFavorites: [...deleteFavorites],
      };
    case FILTER:
      const copy = [...state.allCharacters];
      const filtro = copy.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: filtro,
      };
    case ORDER:
      const copyChar = [...state.allCharacters];
      const sortOrder = copyChar.sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascendente" ? 1 : -1;
        }
        if (a.id < b.id) {
          return payload === "Ascendente" ? -1 : 1;
        } else return 0;
      });
      return {
        ...state,
        myFavorites: sortOrder,
      };
    case LOGIN:
      return {
        ...state,
        idUser: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;

// case "RESET":
//       return {
//         ...state,
//         myFavorites: state.allMyFavorites,
//       };
//     case "LOGIN":
//       return {
//         ...state,
//         idUser: action.payload,
//       };