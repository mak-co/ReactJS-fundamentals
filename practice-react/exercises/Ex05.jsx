import React, { useState } from "react";

const Ex05 = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };
console.log(input)
  const btnClick = () => {if(input.trim(" ")){
    setTasks([...tasks, input]); //using spread operator to push an item to an array
    setInput("")
    console.log(tasks)}
    };

    
 //removing task function
const remove = (indexToRemove)=>{
  setTasks((prevs)=>prevs.filter((task,index) => index!==indexToRemove))
}

//if your new state depends on the previous state then use prev as follow :
// Increment 
// setCount(prev => prev + 1);

// // Decrement
// setCount(prev => prev - 1);

// // Toggle
// setDarkMode(prev => !prev);

// // Add to array
// setTasks(prev => [...prev, newTask]);

// // Remove from array
// setTasks(prev => prev.filter(...));

// // Update object
// setUser(prev => ({
//   ...prev,
//   age: prev.age + 1
// }));

  return (
    <>
      <div className="bg-white min-h-screen gap-5 flex flex-col justify-center items-center">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-5: TODO List</h1>
          <h3 className="">
            Goal - Understand
            <ul className="font-sans font-stretch-condensed">
              <li>Arrays in state </li>
              <li>Rendering lists with .map()</li>
              <li>key prop</li>
              <li>Adding items </li>
              <li>Deleting items</li>
              <li>Updating items</li>
              <li>Immutability (creating new arrays instead of mutating)</li>
            </ul>
          </h3>
        </div>

        <div className=" border rounded-xl  p-4">
          <h1 className="text-3xl font-bold text-center ">Todo List</h1>
          <div className="justify-center flex flex-row text-center  border-black rounded-xl p-4 gap-4 ">
            <input
              type="text"
              placeholder="Add Task"
              className="border rounded-xl px-4 py-2 "
              onChange={inputChange}
              value={input}
            />
            <button
              className="bg-cyan-600 font-bold px-4 py-2 text-white border rounded-xl "
              onClick={btnClick}
            >
              Add Task
            </button>
          </div>
          
          <ol>
            {tasks.map((task, index) => {
              return (
                <li
                  key={index}
                  className="border px-3 py-2 bg-amber-50 rounded-xl text-xl m-2 flex flex-row justify-between items-center "
                >
                  {task}
                  <button
                    className="bg-cyan-600  text-white p-2 rounded-2xl"
                    onClick={() => remove(index)}
                  >  {/* remove(index) will not be executed immediately as its inside an arrow function ,it means "When the user clicks this button, then call remove(index)."*/}
                    Remove
                  </button>
                </li>
              );
            })}
          
          </ol>
        </div>
      </div>
    </>
  );
};

export default Ex05;
