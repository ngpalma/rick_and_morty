import { connect, useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import Card from "./Card";
import { filterCards, orderCards, getFavs } from "../redux/actions";

export function Favorites({ myFavorites }) {
  const filter = useRef(null);
  const order = useRef(null);
  const user = useSelector((state) => state.idUser);
  const dispatch = useDispatch();

  const handleDispatch = (e) => {
    dispatch(getFavs(user));
    filter.current.value = "";
    order.current.value = "";
  };

  return (
    <>
      <select
        // style={styleSelect}
        ref={order}
        onChange={(e) => dispatch(orderCards(e.target.value))}
      >
        {["Ascendente", "Descendente"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <select
        // style={styleSelect}
        ref={filter}
        onChange={(e) => dispatch(filterCards(e.target.value))}
      >
        {["Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <button value="reset" onClick={handleDispatch}>
        Reset
      </button>
      <div>
        {myFavorites.length === 0 ? (
          <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
            ¡Agrega un favorito!
          </p>
        ) : (
          myFavorites.map((e, i) => (
            <Card
              key={e.name}
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={false}
              fav={true}
            />
          ))
        )}
      </div>
    </>
  );
}

//   return (
//     <div>
//       <div>
//         <select name="order" onClick={handleDispatch}>
//           <option value="Ascendente">Ascendente</option>
//           <option value="Descendente">Descendente</option>
//         </select>

//         <select name="filter" onClick={handleDispatch}>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Genderless">Genderless</option>
//           <option value="unknown">unknown</option>
//         </select>
//       </div>
//       {myFavorites?.map((char) => (
//         <Card
//           key={char.name}
//           id={char.id}
//           name={char.name}
//           species={char.species}
//           gender={char.gender}
//           image={char.image}
//           onClose={() => onClose(char.id)}
//         />
//       ))}
//     </div>
//   );
// }

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
