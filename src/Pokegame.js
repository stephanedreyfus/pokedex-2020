import React from 'react'
import './Pokegame.css'
import Pokedex from './Pokedex';

const Pokegame = ({ pokemon, num }) => {
  
  return (
    <>
      <Pokedex pokearray={pokemon.splice(num / 2)} bgcolor={"red"}/>
      <Pokedex pokearray={pokemon} bgcolor={"blue"}/>
    </>
  );
};

export default Pokegame;