import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavs, filterFavs, orderFavs } from "../redux/actions";
import Card from "./Card";
import styles from "./styles.module.css";

export default function Favorites() {
  const dispatch = useDispatch();
  const { displayedFavorites } = useSelector((state) => state);
  const [genderFilter, setGenderFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  const handleFilter = (value) => {
    setGenderFilter(value);
    dispatch(filterFavs(value));
  };

  const handleOrder = (value) => {
    setSortOrder(value);
    dispatch(orderFavs(value));
  };

  const handleReset = () => {
    setGenderFilter("");
    setSortOrder("");
    dispatch(getFavs());
  };

  return (
    <div className={styles.favoritesPage}>
      <h2 className={styles.pageTitle}>MIS FAVORITOS</h2>
      <div className={styles.favControls}>
        <select
          className={styles.filterSelect}
          value={genderFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">Género</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select
          className={styles.filterSelect}
          value={sortOrder}
          onChange={(e) => handleOrder(e.target.value)}
        >
          <option value="">Ordenar por ID</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <button className={styles.filterBtn} onClick={handleReset}>
          Limpiar
        </button>
      </div>

      {displayedFavorites.length === 0 ? (
        <div className={styles.emptyFavs}>
          <p>No hay favoritos aún.</p>
          <p>Agregá personajes desde la página principal con el botón ♡</p>
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {displayedFavorites.map((char) => (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              image={char.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
