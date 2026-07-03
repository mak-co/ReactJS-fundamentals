import React, { useState } from "react";

// Ex-1 Build a Single Controlled Input
// Goal - to Understand useState, value, and onChange

const Ex01 = () => {
  const [name, setname] = useState("Sahib");

  const [input, setInput] = useState("")


  const btnClick = (e) => {
    setname(input);
    setInput("")
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen items-center gap-5">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3 font-bold text-center">
          <h1 className="text-2xl">Ex-1: Build a Single Controlled Input</h1>
          <h3>Goal -Goal - to Understand useState, value, and onChange</h3>
        </div>

        <h1 className="">Hello: {name}</h1>

        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="border border-gray-400 rounded-lg px-3 py-2"
          placeholder="Type your name"
        />

        <button
          onClick={btnClick}
          className="bg-transparent hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-300 rounded-lg transition duration-200"
        >
          Change Name
        </button>
      </div>
    </>
  );
};

export default Ex01;
