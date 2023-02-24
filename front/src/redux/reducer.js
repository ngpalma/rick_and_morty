import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./types.js";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_CHARACTER:
      const myFavoritesFiltered = state.myFavorites.filter(
        (ele) => ele.id !== payload
      );
      return {
        ...state,
        myFavorites: myFavoritesFiltered,
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
    default:
      return { ...state };
  }
};

export default rootReducer;
