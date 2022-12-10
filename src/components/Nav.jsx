import React from "react";
import { Link } from "react-router-dom";
// import About from "./About";
import SearchBar from "./SearchBar";
import styles from "./styles.module.css";

export default function Nav({ onSearch }) {
  return (
    <div>
      <div className={styles.divNav}>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/">Logout</Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

// (characterID) => window.alert(characterID)
// onSearch={(characterID) => window.alert(characterID)}
