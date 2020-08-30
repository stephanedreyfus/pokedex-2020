import React from 'react'
import './Pokegame.css'
import { randId, getPokemon } from '../Helpers/Helpers';
import Pokedex from './Pokedex';

// Someday this will be determined by the players.
const HOW_MANY_POKEMON = 8;

let pokemon = getPokemon(randId(HOW_MANY_POKEMON));

const Pokegame = () => (
  <Pokedex pokearray={pokemon}/>
);

export default Pokegame;