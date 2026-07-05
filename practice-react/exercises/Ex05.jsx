import React, {useState}from "react";

const Ex05 = () => {

const [input,setInput]=useState("")
const [task,setTask]= useState([])



const inputChange= (e)=>{
  setInput(e.target.value)
}

const btnClick = ()=>{
  setTask([...task,input])  //using spread operator to upush an item to an array 
  console.log(task)
}
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

        <div className="w-1/2 border rounded-xl p-4">
          <h1 className="text-3xl font-bold text-center ">Todo List</h1>
          <div className="justify-center flex flex-row text-center  border-black rounded-xl p-4 gap-4 ">
            <input
              type="text"
              placeholder="Add Task"
              className="border rounded-xl px-4 py-2 "
              onChange={inputChange}
            />
            <button className="bg-cyan-600 font-bold px-4 py-2 text-white border rounded-xl "
            onClick={btnClick}>
            
              Add Task
            </button>
          </div>
          <h1 className="text-3xl font-bold text-center ">Task</h1>
          <p id="task" className="border px-3 py-2 bg-amber-50 rounded-xl  text-xl">{task[0]}</p>
        </div>
      </div>
    </>
  );
};

export default Ex05;
