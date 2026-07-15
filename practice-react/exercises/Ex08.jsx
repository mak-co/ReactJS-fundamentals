import React, { useState } from "react";

const Ex08 = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    setError("")
    setUserData(null)
    if (!name.trim()) {
      setError("Please enter a username");
      setLoading(false)
      return
    }
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
  
      if (!response.ok) {
        throw new Error("User Not Found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    setName("")
  };
console.log(error)
  return (
    <>
      <div className="bg-gray-300 min-h-screen gap-5 flex flex-col justify-center items-center">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-8: GitHub User Finder </h1>
          <h3 className="">Goal - Understand</h3>
          <p>
            Promise, fetch(), async, await, .then(), React useState, Loading
            state, Error handling, Conditional rendering, API call
          </p>
        </div>

        <div className="w-full max-w-md bg-amber-50 rounded-2xl shadow-lg p-6">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-slate-800">
            GitHub User Finder
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Search any GitHub profile
          </p>
          {/* Search */}
          <div className="flex gap-2 mt-6">
            <input
              value={name}
              type="text"
              placeholder="Enter GitHub username..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
            />

            <button
              className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition"
              onClick={searchUser}
              disabled={loading}
            >
              {loading?"Searching... ": "Search"}
            </button>
          </div>
          {/* Loading */}
          {/* Uncomment while loading */}{/* Error */}
          {/* Uncomment on error */}
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
          ) : userData ? (
            // User Card
            // Uncomment when data arrives
            <div className="mt-8 bg-slate-50 rounded-xl p-5 border">
              <div className="flex justify-center">
                <img
                  src={userData.avatar_url}
                  alt="avatar"
                  className="w-28 h-28 rounded-full border-4 border-blue-500"
                />
              </div>

              <h2 className="text-2xl font-bold text-center mt-4">
                {userData.login}
              </h2>

              <p className="text-center text-gray-500">{userData.name}</p>

              <p className="text-center mt-3 text-gray-700">{userData.bio}</p>

              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div>
                  <h3 className="font-bold text-lg">{userData.public_repos}</h3>
                  <p className="text-gray-500 text-sm">Repos</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">{userData.followers} </h3>
                  <p className="text-gray-500 text-sm">Followers</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">{userData.following}</h3>
                  <p className="text-gray-500 text-sm">Following</p>
                </div>
              </div>

              <a
                href={userData.html_url}
                className="block mt-6 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition"
                target="_blank"
                rel="noonpener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Ex08;
