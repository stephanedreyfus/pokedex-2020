import React from 'react'
import './Pokegame.css'
import { randId, getPokemon } from './pokeFunctions.js';
import Pokedex from './Pokedex';

let loading = true;

const loadMsg = <h3 className="pokegame-loadmsg">Fetching Pokémon!</h3>;

// Someday this will be determined by the players.
const HOW_MANY_POKEMON = 8;

// This needs to be a useFunction hook with state. Once done
// change loading to false.
let pokemon = getPokemon(randId(HOW_MANY_POKEMON));

const Pokegame = () => {
  return loading === true ? loadMsg : <Pokedex pokearray={pokemon}/>;
};

export default Pokegame;