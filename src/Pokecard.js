import React from 'react';
import './Pokecard.css';

const IMAGE_API = "https://raw.githubusercontent.com/PokeAPI/" +
                  "sprites/master/sprites/pokemon/"

const Pokecard = ({ id, name, type, exp }) => (
  <div className="pokecard">
    <p className="pokecard-name">{name}</p>
    <img
      className="pokecard-img"
      src={IMAGE_API + id + ".png" || "https://tinyurl.com/apokeball"}
      alt={name}
    />
    <p className="pokecard-type">Type: {type}</p>
    <p className= "pokecard-exp">Exp: {exp}</p>
  </div>
);

export default Pokecard;

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png