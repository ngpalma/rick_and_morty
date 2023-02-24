import Card from "./Card";

export default function Cards({characters, onClose}) {
  return characters.map((char) => (
    <Card
      key={char.name}
      id={char.id}
      name={char.name}
      species={char.species}
      gender={char.gender}
      image={char.image}
      onClose={() => onClose(char.id)}
    />
  ));
}
