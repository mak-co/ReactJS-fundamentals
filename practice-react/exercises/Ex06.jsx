import React,{useState} from "react";

const Ex06 = () => {

const [students,setStudents] = useState({})
const [input ,setInput] = useState("")


const btnClick =()=>{
    console.log("btn click")
}




  return (
    <>
      <div className="bg-gray-300 min-h-screen gap-5 flex flex-col justify-center items-center">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">
            Ex-6: Student Attendance Tracker{" "}
          </h1>
          <h3 className="">
            Goal - Understand
            <ul className="font-sans font-stretch-condensed">
              <li> Array; of objects</li>
              <li>Updating Objects inside arrays</li>
              <li>map() for rendering and updating</li>
              <li>Conditional rendering</li>
              <li>Derived values</li>
            </ul>
          </h3>
        </div>

        <div className="border flex  flex-col gap-5 p-2">
          <h1 className="text-2xl font-bold text-center m-3">
            Student Attendance Tracker
          </h1>

          <div className="flex flex-row gap-5 text-xl justify-center items-center font-bold">
            <label htmlFor="">Student Name</label>
            <input
              type="text"
              placeholder="Type Name"
              className="border rounded-xl p-3"
            />
            <button
              className="bg-cyan-600 px-3 py-2 border rounded-xl text-white"
              onClick={btnClick}
            >
              Add Student
            </button>
          </div>

          <div className="flex flex-col p-3 border rounded-xl bg-amber-100 text-xl">
            <h1>Name</h1>
            <h3>Status : </h3>
            <div className="flex justify-center items-center">
              <button className="bg-cyan-600 w-1/3 px-3 py-2 border rounded-xl text-white">
                Present or Absent
              </button>
              <button className="bg-cyan-600 w-1/3 px-3 py-2 border rounded-xl text-white">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ex06;
