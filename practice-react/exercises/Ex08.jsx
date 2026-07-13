import React from 'react'

const Ex08 = () => {

   

    




  return (
    <>
      <div className="bg-gray-300 min-h-screen gap-5 flex flex-col justify-center items-center">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">
            Ex-8: Student Attendance Tracker{" "}
          </h1>
          <h3 className="">Goal - Understand</h3>

        </div>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
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
              type="text"
              placeholder="Enter GitHub username..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition">
              Search
            </button>
          </div>

          {/* Loading */}

          {/* Uncomment while loading */}

          
        <div className="text-center mt-6">
          <p className="text-blue-600 font-medium animate-pulse">
            Loading...
          </p>
        </div>
        *

          {/* Error */}

          {/* Uncomment on error */}

          
        <div className="mt-6 bg-red-100 text-red-600 p-3 rounded-lg text-center">
          User not found!
        </div>
        

          {/* User Card */}

          {/* Uncomment when data arrives */}

          
        <div className="mt-8 bg-slate-50 rounded-xl p-5 border">

          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/1?v=4"
              alt="avatar"
              className="w-28 h-28 rounded-full border-4 border-blue-500"
            />
          </div>

          <h2 className="text-2xl font-bold text-center mt-4">
            mojombo
          </h2>

          <p className="text-center text-gray-500">
            Tom Preston-Werner
          </p>

          <p className="text-center mt-3 text-gray-700">
            Co-founder of GitHub
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6 text-center">

            <div>
              <h3 className="font-bold text-lg">66</h3>
              <p className="text-gray-500 text-sm">
                Repos
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">24000</h3>
              <p className="text-gray-500 text-sm">
                Followers
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">11</h3>
              <p className="text-gray-500 text-sm">
                Following
              </p>
            </div>

          </div>

          <a
            href="/"
            className="block mt-6 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Visit Profile
          </a>

        </div>
       
        </div>
      </div>
    </>
  );
}

export default Ex08