import React from 'react';
import './Pokecard.css';
import pokeball from "./PikPng.com_pokeball-png_589803.png"

const Pokecard = ({ name, img, type, exp }) => (
  <div className="pokecard">
    <p className="pokecard-name">{name}</p>
    <img
      className="pokecard-img"
      src={img || pokeball}
      alt={name}
    />
    <p className="pokecard-type">Type: {type}</p>
    <p className= "pokecard-exp">Exp: {exp}</p>
  </div>
);

export default Pokecard;