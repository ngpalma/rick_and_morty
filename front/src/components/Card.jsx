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
  idUser,
  fav,
}) {
  const [isFav, setIsFav] = useState(fav);

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  });

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      deleteCharacter(id, idUser);
    } else {
      setIsFav(true);
      addCharacter(
        {
          name,
          id,
          image,
          species,
          gender,
        },
        idUser
      );
    }
  }

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
export function mapStateToProps(state) {
  return {
    idUser: state.idUser,
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addCharacter: function (char, idUser) {
      dispatch(addCharacter(char, idUser));
    },
    deleteCharacter: function (id, idUser) {
      dispatch(deleteCharacter(id, idUser));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

// function handleFavorite() {
//   if (isFav) {
//     setIsFav(false);
//     props.removeFav(props.id, props.idUser);
//   } else {
//     setIsFav(true);
//     props.addFav({
//       name: props.name,
//       species: props.species,
//       gender: props.gender,
//       image: props.image,
//       id: props.id,
//     }, props.idUser);
//   }
// }

// export function mapDispatchToProps(dispatch) {
//   return {
//     addFav: function (personaje, idUser) {
//       dispatch(addFav(personaje, idUser));
//     },
//     removeFav: function (id, idUser) {
//       dispatch(removeFav(id, idUser));
//     },
//   };
// }
