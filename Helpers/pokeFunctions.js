// Helper functions for getting a set of random pokemon
import axios from axios;

const BASE_API = "https://pokeapi.co/api/v2/pokemon/";

/**
 * Returns a set `num` random ids with no duplicates in a range of 1-850.
 * The maximum number should eventually be the total different types of
 * Pokemon. Need to research this.
 * 
 * @param {Int} num 
 */
const randId = (num) =>{
  let ids = new Set();
  while (num > 0) {
    let newId = Math.floor(Math.random() * 850);
    if (!ids.has(newId)) {
      ids.add(newId);
      num--;
    }
  }
  return ids;
}

/**
 * Takes in a set generated by randId function, generates a pokemon
 * object for each id in set, and returns an array of objects.
 * 
 * @param {Set} set 
 */
const getPokemon = async (set) => {
  let pokeArray = [];
  for (let id of set) {
    try {
      let res = await axios.get(BASE_API + id + "/");
      let pokemon = {
        id: res.data.id,
        name: res.data.name,
        type: res.data.types[0].type,
        base_experience: res.data.base_experience,
      }
      pokeArray.push(pokemon);
    }
    catch (e) {
      console.log({msg: `No pokemon at ${id}`, error: e});
    }
  }

  return pokeArray;
};

export { randId, getPokemon };