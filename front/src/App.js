import axios from 'axios';
import { useState, useEffect } from 'react';
import "./App.css";
import Cards from "./components/Cards.jsx";
import styles from "./Estilos.module.css";
import Nav from "./components/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
      axios.get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
        .then((response) => {
          const data = response.data;
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((error) => {
          console.log(error);
        });
  };
  
  // const onSearch = (character) => {
  //   axios.get(`https://rickandmortyapi.com/api/character/${character}`)
  //     .then((response) => {
  //       const data = response.data;
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  
  // const onClose = (id) => {
  //   setCharacters(characters.filter((char) => char.id !== id));
  // };

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "ngpalma@gmail.com";
  const password = "36años";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  

  // useEffect(() => {
  //   !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={styles.divNav}>
        {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <div className={styles.divcards}>
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
