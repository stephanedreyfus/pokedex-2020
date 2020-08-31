import React, { useState, useEffect } from 'react'
import './Pokegame.css'
import { randId, getPokemon } from './pokeFunctions.js';
import Pokedex from './Pokedex';

const [loading, setLoading] = useState(true);
const [pokemon, setPokemon] = useState([]);

// Someday this will be determined by the players.
const NUM_POKEMON = 8;

// This needs to be a useFunction hook with state. Once done
// change loading to false.
useEffect(() => {
  setPokemon(getPokemon(randId(NUM_POKEMON)));
  if (pokemon.length > 0) setLoading(false);
})

const loadMsg = <h3 className="pokegame-loadmsg">Fetching Pokémon!</h3>;

const Pokegame = () => {
  return loading === true ? loadMsg : <Pokedex pokearray={pokemon}/>;
};

export default Pokegame;