import React from "react";
import styles from "./styles.module.css";

export default function About() {
  return (
    <div className={styles.divAbout}>
      <h1>Aplicación Rick & Morty</h1>
      <h2>By Nicolás Palma</h2>
      <span>
        Mi primer aplicación creada para Henry es la de Rick & Morty. <br/> En ella
        aprendi a usar los componentes de React y los estilos de CSS
      </span>
      <br />
      <img src="" alt="Foto de Nicolás" />
    </div>
  );
}
