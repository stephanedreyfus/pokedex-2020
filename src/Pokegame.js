import React from 'react'
import './Pokegame.css'
import Pokedex from './Pokedex';

const Pokegame = ({ pokemon, num }) => {
  
  return (
    <>
      <Pokedex player={"Player One"} pokearray={pokemon.splice(num / 2)} bgcolor={"red"}/>
      <Pokedex player={"Player Two"} pokearray={pokemon} bgcolor={"blue"}/>
    </>
  );
};

export default Pokegame;