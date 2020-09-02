import React, { useState, useEffect } from 'react'
import './Pokegame.css'
import { randId, getPokemon } from './pokeFunctions.js';
import Pokedex from './Pokedex';


// Someday this will be determined by the players.
const NUM_POKEMON = 8;

const loadMsg = <h3 className="pokegame-loadmsg">Fetching Pokémon!</h3>;

const Pokegame = () => {
  const [loading, setLoading] = useState(true);
  const [handOne, setHandOne] = useState(null);
  const [handTwo, setHandTwo] = useState(null);
  
  useEffect(() => {
    const handleGetPokemon = async () => {
      let res = await getPokemon(randId(NUM_POKEMON));

      // For the time being the assumption is NUM_POKEMON will
      // allways be an even number. *** Set up conditional
      // to ensure this.
      setHandOne(res.splice(NUM_POKEMON / 2));
      setHandTwo(res);

    };
    
    handleGetPokemon();
    if (handOne && handTwo) setLoading(false);
    
  }, [loading]);
  
  const twoPokedecks = (
    <>
      <Pokedex pokearray={handOne} bgcolor={"red"}/>
      <Pokedex pokearray={handTwo} bgcolor={"blue"}/>
    </>
  );
  
  return loading === true ? loadMsg : twoPokedecks;
};

export default Pokegame;