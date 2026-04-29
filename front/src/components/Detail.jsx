import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./styles.module.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/characters/detail/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCharacter(res.data))
      .catch(() => navigate("/home"))
      .finally(() => setLoading(false));
  }, [id, token, navigate]);

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (!character) return null;

  const statusClass =
    character.status?.toLowerCase() === "alive"
      ? styles.alive
      : character.status?.toLowerCase() === "dead"
      ? styles.dead
      : styles.unknown;

  return (
    <div className={styles.detailPage}>
      <button className={styles.backBtn} onClick={() => navigate("/home")}>
        ← Volver
      </button>
      <div className={styles.detailContainer}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.detailImage}
        />
        <div className={styles.detailInfo}>
          <h1 className={styles.detailName}>{character.name}</h1>
          <div className={styles.detailStat}>
            <span className={styles.statLabel}>Estado</span>
            <span className={`${styles.statusDot} ${statusClass}`} />
            <span>{character.status}</span>
          </div>
          <div className={styles.detailStat}>
            <span className={styles.statLabel}>Especie</span>
            <span>{character.species}</span>
          </div>
          <div className={styles.detailStat}>
            <span className={styles.statLabel}>Género</span>
            <span>{character.gender}</span>
          </div>
          <div className={styles.detailStat}>
            <span className={styles.statLabel}>Origen</span>
            <span>{character.origin?.name || "Desconocido"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
