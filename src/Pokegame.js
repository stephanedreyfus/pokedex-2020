import React, { useState, useEffect } from 'react'
import './Pokegame.css'
import { randId, getPokemon } from './pokeFunctions.js';
import Pokedex from './Pokedex';


// Someday this will be determined by the players.
const NUM_POKEMON = 8;

const loadMsg = <h3 className="pokegame-loadmsg">Fetching Pokémon!</h3>;

const Pokegame = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Trying with .then. Uh oh. This causes an infinite loop. Why?
    // getPokemon(randId(NUM_POKEMON)).then((res) => {
    //   setPokemon(res);
    // });

    // Async necessitates inner function wrapper.
    // Also produces infinite loop.
    const handleGetPokemon = async () => {
      let res = await getPokemon(randId(NUM_POKEMON));
      setPokemon(res);
    };
    
    handleGetPokemon();

    if (pokemon) setLoading(false);
  }, [pokemon]);

  // useEffect(() => {
  //   if (pokemon) setLoading(false)
  // }, [pokemon]);
  
  return loading === true ? loadMsg : <Pokedex pokearray={pokemon}/>;
};

export default Pokegame;