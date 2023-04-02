import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import { RingLoader } from "react-spinners";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    image: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => {
        const char = response.data;
        if (char.name) {
          setCharacter(char);
        } else {
          setLoading(false);
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        setLoading(false);
        window.alert("No hay personajes con ese ID");
      })
      .finally(() => setLoading(false));
  }, [detailId]);

  return (
    <div className={styles.detailDiv}>
      <button
        className={styles.buttonDiv}
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Home
      </button>
      {loading ? (
        <div className={styles.loadingDiv}>
          <RingLoader size={150} color={"#1abc9c"} loading={loading} />
        </div>
      ) : character ? (
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
      ) : (
        <div>Error al cargar el personaje</div>
      )}
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "./styles.module.css";

// export default function Detail() {
//   const { detailId } = useParams();
//   const navigate = useNavigate();
//   const [character, setCharacter] = useState();

//   useEffect(() => {
//     axios
//       .get(`https://rickandmortyapi.com/api/character/${detailId}`)
//       .then((response) => {
//         const char = response.data;
//         if (char.name) {
//           setCharacter(char);
//         } else {
//           window.alert("No hay personajes con ese ID");
//         }
//       })
//       .catch((err) => {
//         window.alert("No hay personajes con ese ID");
//       });
//     return setCharacter({});
//   }, [detailId]);

//   return (
//     <div className={styles.detailDiv}>
//       <button className={styles.buttonDiv}
//         onClick={() => {
//           navigate("/home");
//         }}
//       >
//         Go Home
//       </button>
//       { character ? 
//         <div className={styles.divDetail}>
//           <div>
//             <h1>NOMBRE: {character.name}</h1>
//             <h2>ESTADO: {character.status}</h2>
//             <h2>ESPECIE: {character.species}</h2>
//             <h2>GENERO: {character.gender}</h2>
//             <h2>ORIGEN: {character.origin?.name}</h2>
//           </div>
//           <div>
//             <img src={character.image} alt={character.name} />
//           </div>
//         </div>
//        : 
//         ""
//       }
//     </div>
//   );
// }
