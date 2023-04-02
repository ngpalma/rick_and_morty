import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import styles from "./Estilos.module.css";
import Nav from "./components/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.idUser);

  const username = "ngpalma@gmail.com";
  const password = "36años";

  function logIn(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access,]);

  const onSearch = (id) => {
    axios
      .get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((oldChars) => [...oldChars, data])
            : alert("Personaje repetido");
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  
  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={styles.divNav}>
        {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} logout={logout}/>}
      </div>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={logIn} />} />
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


  // const onClose = (id) => {
  //   setCharacters(characters.filter((char) => char.id !== id));
  // };


  // const username = "ngpalma@gmail.com";
  // const password = "36años";
