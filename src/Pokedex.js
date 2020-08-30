import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const BASE_API = "https://pokeapi.co/api/v2/pokemon/";

const DEFAULT = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

const getPokemon = async () => {
  let randId = Math.floor(Math.random() * 850);
  try {
    let res = await axios.get(BASE_API + randId + "/");
    return res;
  }
  catch (e) {
    return ({msg: `No pokemon at ${randId}`, error: e});
  }

};

const Pokedex = ({ pokearray=DEFAULT }) => (
  <>
    <h1>Your Pokédex</h1>
    <ul className="pokedex-list">
      {pokearray.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
    </ul>
      <div>{getPokemon()}</div>
  </>
);

export default Pokedex;