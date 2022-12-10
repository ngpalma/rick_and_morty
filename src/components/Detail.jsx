import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detailDiv}>
      <button className={styles.buttonDiv}
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Home
      </button>
      { character ? 
        <div className={styles.divDetail}>
          <div>
            <h1>NOMBRE: {character.name}</h1>
            <h2>ESTADO: {character.status}</h2>
            <h2>ESPECIE: {character.species}</h2>
            <h2>GENERO: {character.gender}</h2>
            <h2>ORIGEN: {character.origin?.name}</h2>
          </div>
          <div>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
       : 
        ""
      }
    </div>
  );
}
