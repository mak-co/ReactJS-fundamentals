import Card from "../components/cards.jsx";
import students from "../components/students.jsx";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Heading */}
      <h1 className="font-semibold m-4 text-3xl text-center font-serif font">
        Student Directory
      </h1>

      {/* search bar  */}
      <div
        id="searchBox"
        className="flex flex-row  w-full m-4 h-10 justify-center "
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-2 mx-1 w-1/3 p-4 bg-white rounded-xl "
        />
        <button className="bg-black rounded-xl  text-white w-20">Search</button>
      </div>

      {/* Container for all the cards in grid */}

      <div
        id="container"
        className=" items-center  h-100vh grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4"
      >
        {students
          .filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((student) => (
            <Card
              key={student.id}
              name={student.name}
              className={student.className}
              result={student.result}
              rollNumber={student.rollNumber}
              attendance={student.attendance}
            />
          ))} 
      </div>
    </>
  );
}

export default App;
