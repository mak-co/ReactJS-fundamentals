import React, { useEffect, useState } from 'react'

const Ex10 = () => {
const [pokeName,setPokeName]= useState("")
const [pokeData,setPokeData]=useState(null)
const [pokemon,setPokemon]=useState([])


  const search=async ()=>{
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/",
    );
    console.log(response)

    const responsePoke = await response.json()
    console.log(responsePoke.results);
    
    const resultPokeaArr = responsePoke.results
    
    const urls = resultPokeaArr.map((item) => item.url);    
    
    console.log(urls)
    urls.map(async(item,index)=>{
     const responseUrl= await fetch(item)
    
     const responseUrlJson =await responseUrl.json()
     setPokemon(prev=>[...prev,responseUrlJson])
     console.log(responseUrlJson)
    })
  }


// so whenever the app reloads search will run as dependency is []
useEffect(() => {
  search();
}, []);
  return (
    <>
      <div className="bg-gray-200 min-h-screen gap-5 flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-10:Pokemon Search App</h1>
          <h3 className="">
            Goal -To revise Controlled input, API fetch, Async/Await, Loading,
            Error, Conditional rendering, Rendering API response
          </h3>
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <div className="flex flex-row gap-3 border px-4 py-3 rounded-xl ">
            <input
              type="text"
              className="border outline-none focus:ring-1 focus:ring-blue-600 px-3 py-2 rounded-xl"
              onChange={(e) => setPokeName(e.target.value)}
            />
            <button
              className="bg-cyan-600 px-3 py-2 rounded-xl text-white text-xl "
              onClick={search}
            >
              Search
            </button>
          </div>

          {/* card grid*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5 items-center">
            {/* card */}

            {pokemon.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 border  rounded-xl p-5 flex flex-col items-center shadow-xl hover:scale-105  transition-all duration-300"
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

                <button className="mt-5 w-full bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-semibold py-2 rounded-xl">
                  View Stats
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ex10