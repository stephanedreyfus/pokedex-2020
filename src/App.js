import React, { useState, useEffect } from 'react';
import './App.css';
import { randId, getPokemon } from './pokeFunctions.js';
import Pokegame from './Pokegame';

// Someday this will be determined by the players.
const NUM_POKEMON = 8;

const App = () => {
  
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  const loadMsg = <h3 className="app-loadmsg">Fetching Pokémon!</h3>;
  const pokedex = <section className="app"><Pokegame pokemon={pokemon} num={NUM_POKEMON}/></section>

  useEffect(() => {
    const handleGetPokemon = async () => {
      let res = await getPokemon(randId(NUM_POKEMON));
      setPokemon(res);
      if (res) setLoading(false);
    };
    
    handleGetPokemon();

  }, []);
  debugger;
  return loading === true ? loadMsg : pokedex;
};

export default App;