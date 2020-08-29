import '.Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => (
  <div className="pokecard">
    <p className="pokecard-name">{name}</p>
    <img
      className="pokecard-img"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt={`Image of a ${name}`}
    />
    <p className="pokecard-type">Type: {type}</p>
    <p className= "pokecard-exp">Exp: {exp}</p>
  </div>
);

export default Pokecard;