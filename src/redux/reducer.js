import { ADD_CHARACTER, DELETE_CHARACTER, GET_CHAR_NAME } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_CHARACTER:
      const myFavoritesFiltered = state.myFavorites.filter((ele) => ele.id !== payload);
      return {
        ...state,
        myFavorites: myFavoritesFiltered,
      };
    case GET_CHAR_NAME:
      return {
        ...state,
        storeName: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
