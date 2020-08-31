import React, { useState, useEffect } from 'react'
import './Pokegame.css'
import { randId, getPokemon } from './pokeFunctions.js';
import Pokedex from './Pokedex';


// Someday this will be determined by the players.
const NUM_POKEMON = 8;

const loadMsg = <h3 className="pokegame-loadmsg">Fetching Pokémon!</h3>;

const Pokegame = () => {
  console.log("In Pokegame component.");
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  // This use effect calls an async await helper function in pokeFunctions.js.
  // getPokemon is async await in pokeFunctions.js, and console.logs there
  // show the return of an array of objects.
  // How do I get the use effect call to that function to await, as it
  // always sets state with a promise?
  useEffect(() => {
    // First attempt produces an uresolved promise.
    // setPokemon(getPokemon(randId(NUM_POKEMON)))

    // Await here causes problems because making the useEffect callback async
    // makes React grumpy.
    // let res = await getPokemon(randId(NUM_POKEMON));
    // setPokemon(res);

    // Trying with .then. Uh oh. This causes an infinite loop. Why?
    getPokemon(randId(NUM_POKEMON)).then((res) => {
      setPokemon(res);
    });

    if (pokemon) setLoading(false);
    console.log("Pokearray at end of use effect", pokemon);
  }, [pokemon]);

  // useEffect(() => {
  //   if (pokemon) setLoading(false)
  // }, [pokemon]);
  
  return loading === true ? loadMsg : <Pokedex pokearray={pokemon}/>;
};

export default Pokegame;