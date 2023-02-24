import { connect, useDispatch } from "react-redux";
import React from "react";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";

export function Favorites({ myFavorites, onClose }) {
  const dispatch = useDispatch();

  const handleDispatch = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      return dispatch(orderCards(value));
    }
    if (name === "filter") {
      return dispatch(filterCards(value));
    }
  };
  return (
    <div>
      <div>
        <select name="order" onClick={handleDispatch}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name="filter" onClick={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites?.map((char) => (
        <Card
          key={char.name}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
