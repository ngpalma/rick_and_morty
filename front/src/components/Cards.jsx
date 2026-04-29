import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setFilters, getAllCharacters } from "../redux/actions";
import Card from "./Card";
import styles from "./styles.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const { characters, totalPages, currentPage, filters, token } = useSelector(
    (state) => state
  );
  const debounceRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    if (!token) return;

    const controller = new AbortController();
    setLoading(true);
    setFetchError("");

    dispatch(getAllCharacters(currentPage, filters, controller.signal))
      .then((result) => {
        if (result?.error) setFetchError(result.error);
      })
      .finally(() => setLoading(false));

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => controller.abort();
  }, [currentPage, filters, token, dispatch]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      dispatch(setFilters({ name: value }));
    }, 500);
  };

  const handleFilterChange = (key, value) => {
    dispatch(setFilters({ [key]: value }));
  };

  const handleClear = () => {
    clearTimeout(debounceRef.current);
    const input = document.getElementById("nameSearch");
    if (input) input.value = "";
    dispatch(setFilters({ name: "", status: "", gender: "", species: "" }));
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.filterBar}>
        <input
          id="nameSearch"
          className={styles.filterInput}
          type="text"
          placeholder="Buscar personaje..."
          defaultValue={filters.name}
          onChange={handleNameChange}
        />
        <select
          className={styles.filterSelect}
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
        >
          <option value="">Estado</option>
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select
          className={styles.filterSelect}
          value={filters.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="">Género</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select
          className={styles.filterSelect}
          value={filters.species}
          onChange={(e) => handleFilterChange("species", e.target.value)}
        >
          <option value="">Especie</option>
          <option value="human">Humano</option>
          <option value="alien">Alien</option>
          <option value="humanoid">Humanoide</option>
          <option value="robot">Robot</option>
          <option value="animal">Animal</option>
        </select>
        <button className={styles.filterBtn} onClick={handleClear}>
          Limpiar
        </button>
      </div>

      {loading ? (
        <div className={styles.loadingScreen}>
          <div className={styles.spinner} />
        </div>
      ) : fetchError ? (
        <div className={styles.emptyState}>{fetchError}</div>
      ) : characters.length === 0 ? (
        <div className={styles.emptyState}>
          No se encontraron personajes con esos filtros.
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {characters.map((char) => (
            <Card key={char.id} {...char} />
          ))}
        </div>
      )}

      {!loading && totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => dispatch(setPage(currentPage - 1))}
            disabled={currentPage === 1}
          >
            ← Anterior
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            className={styles.pageBtn}
            onClick={() => dispatch(setPage(currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
}
