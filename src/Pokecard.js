import React from 'react';
import './Pokecard.css';

const Pokecard = ({ name, img, type, exp }) => (
  <div className="pokecard">
    <p className="pokecard-name">{name}</p>
    <img
      className="pokecard-img"
      src={img || "https://tinyurl.com/apokeball"}
      alt={name}
    />
    <p className="pokecard-type">Type: {type}</p>
    <p className= "pokecard-exp">Exp: {exp}</p>
  </div>
);

export default Pokecard;

// *** Eventually set image default to "https://tinyurl.com/apokeball", but need to look into
// how to check if a url returns a 404 for the conditional.
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png