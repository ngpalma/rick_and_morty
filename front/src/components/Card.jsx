import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/actions";
import styles from "./styles.module.css";

export default function Card({ id, name, image, species, gender, status }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const isFav = myFavorites.some((f) => f.id === id);

  const handleFavorite = (e) => {
    e.preventDefault();
    if (isFav) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite({ id, name, image, species, gender }));
    }
  };

  const statusClass =
    status?.toLowerCase() === "alive"
      ? styles.alive
      : status?.toLowerCase() === "dead"
      ? styles.dead
      : styles.unknown;

  return (
    <div className={styles.card}>
      <button
        className={styles.favBtn}
        onClick={handleFavorite}
        title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {isFav ? "♥" : "♡"}
      </button>
      <Link to={`/detail/${id}`} className={styles.cardLink}>
        <img src={image} alt={name} className={styles.cardImage} />
        <div className={styles.cardBody}>
          <h3 className={styles.cardName}>{name}</h3>
          <div className={styles.cardStatus}>
            <span className={`${styles.statusDot} ${statusClass}`} />
            <span>
              {status} · {species}
            </span>
          </div>
          <p className={styles.cardGender}>{gender}</p>
        </div>
      </Link>
    </div>
  );
}
