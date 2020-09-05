import React from 'react'
import './Pokegame.css'
import Pokedex from './Pokedex';

/**
 * Takes in an array of pokemon objects and sums all experience points.
 * @param {Array of Objects} pokearray 
 */
const calcTotalExp = (pokearray) => {
  console.log("In calcTotalExperience with array", pokearray);
  let totalExp = 0;
  for (let mon of pokearray) {
    console.log("Curren mon value:", mon.base_experience);
    totalExp += mon.base_experience;
  }
  return totalExp;
}

const Pokegame = ({ pokemon, num }) => {
  
  const handOne = pokemon.splice(num / 2);
  const handTwo = pokemon;

  return (
    <>
      <Pokedex
        player={"Player One"}
        pokearray={handOne}
        bgcolor={"red"}
        totalExp={calcTotalExp(handOne)}
      />
      <Pokedex
        player={"Player Two"}
        pokearray={handTwo}
        bgcolor={"blue"}
        totalExp={calcTotalExp(handTwo)}
      />
    </>
  );
};

export default Pokegame;