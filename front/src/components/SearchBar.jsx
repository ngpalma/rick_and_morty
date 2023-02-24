import styles from "../Estilos.module.css";
import React from "react";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = React.useState("");
  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  return (
    <div>
      <input
        className={styles.inputTag}
        type="search"
        value={character}
        onChange={handleChange}
      />
      <button className={styles.buttonTag} onClick={() => onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}
