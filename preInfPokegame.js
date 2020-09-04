// 28c44c1e203fe77ec437c1a5aff084830d7f916a Master/HEAD

// 17f6b73972e8e1fac6e8512ed9d15ec0b0f989ee Last working API call

// Someday this will be determined by the players.
const NUM_POKEMON = 8;

const loadMsg = <h3 className="pokegame-loadmsg">Fetching Pokémon!</h3>;

const Pokegame = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const handleGetPokemon = async () => {
      let res = await getPokemon(randId(NUM_POKEMON));
      setPokemon(res);
      if (res) setLoading(false);
    };
    
    handleGetPokemon();

  }, []);
  
  return loading === true ? loadMsg : <Pokedex pokearray={pokemon}/>;
};

export default Pokegame;