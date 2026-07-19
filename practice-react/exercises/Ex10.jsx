import React, { useEffect, useState } from "react";

const Ex10 = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null)
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [view,setView] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  const search = async () => {
    setLoading(true)
    setError("");
    //fetchign random pokemons on every refresh using math.random and offset in api
    const randomOffset = Math.floor(Math.random() * 980); //*980 becouse it gives in decimal ex: 0.000

    //fetching the api
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${randomOffset}&limit=20`,
      );
      setLoading(false)
      if (!response.ok) {
        throw new Error("There is NO such Pokemon");
      }

      const responsePoke = await response.json();

      const resultPokeaArr = responsePoke.results;

      const urls = resultPokeaArr.map((item) => item.url);

      const fetchPromises = urls.map(async (item) => {
        const responseUrl = await fetch(item);

        const responseUrlJson = await responseUrl.json();

        return responseUrlJson;
      });
      const allpromises = await Promise.all(fetchPromises);

      setPokemon(allpromises);
    } catch (err) {
      setError(err.message);
    }
  };
  const searchBtn = async () => {
    
    if (pokeName.trim() === "") {
      setShowModal(true)
      return
    } else {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`,
        );

        if (!response.ok) {
          throw new Error("There is No such Pokemon");
        }
        const data = await response.json();
        setPokemon([data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const viewBtn = ()=>{
    setView(prev=>!prev)
  }

console.log(pokemon)


  // so whenever the app reloads search will run as dependency is []
  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="bg-gray-200 min-h-screen gap-5 flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3 text-center">
          <h1 className="text-2xl font-bold">Ex-10:Pokemon Search App</h1>
          <h3>
            Goal - To learn useEffect, Promise.all(), Randomising offset for
            API, dynamic query parameter(?)
          </h3>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-row gap-3 border px-4 py-3 rounded-xl">
            <input
              type="text"
              className="border outline-none focus:ring-1 focus:ring-blue-600 px-3 py-2 rounded-xl"
              onChange={(e) => setPokeName(e.target.value)}
            />

            <button
              className="bg-cyan-600 px-3 py-2 rounded-xl text-white text-xl"
              onClick={searchBtn}
            >
              Search
            </button>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5 min-w-screen items-center">
            {error ? (
              <div className="text-center mt-6 text-gray-500 col-span-full">
                <h1>There is no such Pokemon</h1>
              </div>
            ) : loading ? (
              <div className="text-center mt-6 flex justify-center col-span-full">
                <p className="text-blue-600 font-medium animate-pulse">
                  Loading...
                </p>
              </div>
            ) : pokemon.length > 0 ? (
              pokemon.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900 border rounded-xl p-5 flex flex-col items-center shadow-xl hover:scale-105 justify-center transition-all duration-300"
                >
                  <img
                    className="w-40 h-40 object-contain"
                    src={item.sprites.other["official-artwork"].front_default}
                    alt={item.name}
                  />

                  <h2 className="text-2xl font-bold text-white capitalize mt-3">
                    {item.name}
                  </h2>

                  <p className="text-gray-400">
                    #{String(item.id).padStart(3, "0")}
                  </p>

                  <div className="flex gap-2 mt-3">
                    {item.types.map((type) => (
                      <span
                        key={type.type.name}
                        className="bg-cyan-600 text-white text-sm px-3 py-1 rounded-full capitalize"
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full mt-5 text-center">
                    <div className="bg-zinc-800 rounded-lg p-3">
                      <p className="text-gray-400 text-sm">Height</p>
                      <p className="text-white font-semibold">{item.height}</p>
                    </div>

                    <div className="bg-zinc-800 rounded-lg p-3">
                      <p className="text-gray-400 text-sm">Weight</p>
                      <p className="text-white font-semibold">{item.weight}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mt-6 text-gray-500 col-span-full">
                <h1>There is no such Pokemon</h1>
              </div>
            )}
            {showModal && (
              <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
                  <h2 className="text-xl font-bold mb-3">Empty Input</h2>

                  <p>Please enter a Pokémon name.</p>

                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-5 bg-cyan-600 text-white px-5 py-2 rounded-lg"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ex10;
