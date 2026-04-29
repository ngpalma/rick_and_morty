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

const initialState = {
  characters: [],
  totalPages: 1,
  currentPage: 1,
  filters: { name: "", status: "", gender: "", species: "" },
  myFavorites: [],
  displayedFavorites: [],
  user: null,
  token: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARS:
      return {
        ...state,
        characters: payload.results || [],
        totalPages: payload.info?.pages || 1,
      };
    case SET_PAGE:
      return { ...state, currentPage: payload };
    case SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...payload },
        currentPage: 1,
      };
    case GET_FAVS:
      return { ...state, myFavorites: payload, displayedFavorites: payload };
    case ADD_FAVORITE: {
      const updated = [...state.myFavorites, payload];
      return { ...state, myFavorites: updated, displayedFavorites: updated };
    }
    case DELETE_FAVORITE: {
      const updated = state.myFavorites.filter((f) => f.id !== payload);
      return { ...state, myFavorites: updated, displayedFavorites: updated };
    }
    case FILTER_FAVS:
      return {
        ...state,
        displayedFavorites: payload
          ? state.myFavorites.filter((f) => f.gender === payload)
          : state.myFavorites,
      };
    case ORDER_FAVS: {
      const sorted = [...state.myFavorites].sort((a, b) => {
        if (a.id > b.id) return payload === "asc" ? 1 : -1;
        if (a.id < b.id) return payload === "asc" ? -1 : 1;
        return 0;
      });
      return { ...state, displayedFavorites: sorted };
    }
    case LOGIN:
    case RESTORE_SESSION:
      return { ...state, user: payload.user, token: payload.token };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default rootReducer;
