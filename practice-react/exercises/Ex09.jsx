import React, { useState } from "react";

const Ex09 = () => {
  const [movieData, setMovieData] = useState();
  const [movieName, setMovieName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("")
  const [selectedMovieId,setSelectedMovieId]=useState(null)


  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const search = async () => {
    setError("") //first disconnet the internet then see the error
    //now conncet the internet again u will see that even after 
    // conncetign with internet it's showing the same error there 
    // for need to set error as ""
    setLoading(true)
    try{
      const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}`,
    );
    console.log(response)
    if(!response.ok){
      throw new Error("Movie Not Found")
    }

  
    const data = await response.json();
    setMovieData(data);
    
    }
     catch(err){
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
  };

//toggle funciton for view details btn
   const viewDetails = (item) => {
     if (selectedMovieId=== item.id) {
       setSelectedMovieId(null);
     } else {
       setSelectedMovieId(item.id);
     }
   };
 

  return (
    <>
      <div className="bg-white min-h-screen gap-5 flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-9: Movie Search App</h1>
          <h3 className="">
            Goal -To revise Controlled input, API fetch, Async/Await, Loading,
            Error, Conditional rendering, Rendering API response
          </h3>
        </div>

        <div>
          <div className="bg-amber-50 flex gap-3 mb-4 border p-4 rounded-xl ">
            <input
              value={movieName}
              type="text"
              className="px-3 py-2 outline-none border rounded-xl ring-1 ring-blue-500 w-full"
              onChange={(e) => {
                setMovieName(e.target.value);
              }}
            />
            <button
              className="bg-blue-500 w-xs text-white p-2 rounded-xl"
              onClick={search}
            >
              Search
            </button>
          </div>

          {loading ? (
            <div className="text-center mt-6">
              <p className="text-blue-600 font-medium animate-pulse">
                Loading...
              </p>
            </div>
          ) : error ? (
            <div className="mt-6 bg-red-100 text-red-600 p-3 rounded-lg text-center">
              {error}
            </div>
          ) : movieData?.results.length === 0 ? (
            <div className="text-center mt-6 text-gray-500">
              <h1>There is no such movie in the world</h1>
            </div>
          ) : (
            /* card grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
              {/* first check if the movieData exist or not then map the results as an array */}
              {movieData?.results.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-amber-50 border p-4 m-4 rounded-xl"
                >
                  <div className="border  p-0">
                    {/* image must be fit to the container div */}
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      className="w-full h-full "
                      alt="movie"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-2xl ">{item.title}</h1>
                    <h1 className="font-medium">{item.release_date}</h1>
                    <p>{selectedMovieId===item.id ? item.overview : null}</p>

                    <button
                      onClick={() => viewDetails(item)}
                      className="bg-blue-500 text-white p-2 rounded-xl"
                    >
                      {selectedMovieId===item.id? "Collapse" : "View Detail"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Ex09;
