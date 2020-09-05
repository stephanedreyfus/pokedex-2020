import React from 'react'
import './Pokegame.css'
import Pokedex from './Pokedex';

/**
 * Takes in an array of pokemon objects and sums all experience points.
 * @param {Array of Objects} pokearray
 * @returns {Integer}
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

// FIXME Need to handle potential equal score.
const Pokegame = ({ pokemon, num }) => {
  
  const handOne = pokemon.splice(num / 2);
  const handTwo = pokemon;
  const scoreOne = calcTotalExp(handOne);
  const scoreTwo = calcTotalExp(handTwo);

  return (
    <>
      <Pokedex
        player={"Player One"}
        pokearray={handOne}
        bgcolor={"red"}
        totalExp={scoreOne}
        win={scoreOne > scoreTwo ? true : false}
      />
      <Pokedex
        player={"Player Two"}
        pokearray={handTwo}
        bgcolor={"blue"}
        totalExp={scoreTwo}
        win={scoreOne < scoreTwo ? true : false}
      />
    </>
  );
};

export default Pokegame;