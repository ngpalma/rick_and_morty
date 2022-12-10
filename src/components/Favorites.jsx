import { connect, Connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Favorites({ myFavorites, onClose }) {
  const navigate = useNavigate();

  return (
    <div>
      {myFavorites.map((char) => (
        <Card
          key={char.key}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
