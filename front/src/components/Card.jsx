import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Estilos.module.css";
import { addCharacter, deleteCharacter } from "../redux/actions.js";
import { connect } from "react-redux";

export function Card({
  name,
  onClose,
  id,
  image,
  species,
  gender,
  addCharacter,
  deleteCharacter,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      deleteCharacter(id);
    } else {
      setIsFav(true);
      addCharacter({
        name,
        onClose,
        id,
        image,
        species,
        gender,
        addCharacter,
        deleteCharacter,
        myFavorites,
      });
    }
  }
  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  
  return (
    <div className={styles.divcard} key={name}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.botonX} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <img className={styles.divcard} src={image} alt={name} />
      <h2 className={styles.datos}>{species}</h2>
      <h2 className={styles.datos}>{gender}</h2>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addCharacter: function (char) {
      dispatch(addCharacter(char));
    },
    deleteCharacter: function (id) {
      dispatch(deleteCharacter(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
