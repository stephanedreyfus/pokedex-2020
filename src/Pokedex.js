import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

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

const Pokedex = ({ pokearray=DEFAULT, bgcolor, player, totalExp }) => {

  const playerStyle = {
    background: `linear-gradient(to bottom right, lightgray, ${bgcolor})`
  };

  return (
    <div className="pokedex" style={playerStyle}>
      <h1 className="pokedex-header">{player}'s Pokédex</h1>
      <ul className="pokedex-list">
        {pokearray.map((p) => (
          <Pokecard
            key={p.id}
            name={p.name}
            img={p.img}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </ul>
        <h2>This hand is worth {totalExp} points.</h2>
    </div>
  );
};

export default Pokedex;