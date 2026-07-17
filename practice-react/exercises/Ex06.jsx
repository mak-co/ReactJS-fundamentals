import React, { useState } from "react";

const Ex06 = () => {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");

  const [present, setPresent] = useState(true);

  // toggle button
  const toggle = (index) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, status: !student.status } : student,
      ),
    );
  };

  // Don't store state that you can calculate from other state,so instead of creating
  // a state for it we'll use filter as following

  //filter creates a new array containing only the items that pass the condition.
  //here ((student)=> student.status) is a condition which will retrun an aray
  const attendance = students.filter((student) => student.status).length;

  students.map((std) => console.log(std.status));

  const addStudent = () => {
    const newStudent = { name: input, status: present };
    if (input.trim() === "") {
      return;
    }

    setStudents((prev) => [...prev, newStudent]);
    setInput("");
  };
  // Removing the student
  // Initially I thought of writing:
  // students.filter(student => student != students[index])
  //
  // But comparing the whole student object is not the best approach.
  // Instead, we compare the current index (i) while filter() loops through the array
  // with the index of the Remove button that was clicked.
  //
  // If both indexes are different, keep the student.
  // If both indexes are the same, remove that student.
  //
  // We use setStudents() because filter() only creates a new array;
  // React won't update the UI until we update the state.
  // Changing the state tells React to re-render the component with the new students array.
  const remove = (index) => {
    setStudents(students.filter((student, i) => i != index));
  };

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

        <div className="flex  flex-col gap-5 w-auto p-2">
          <h1 className="text-2xl font-bold text-center m-3">
            Student Attendance Tracker
          </h1>

          <div className="flex flex-row gap-5 text-xl justify-center items-center font-bold">
            <label htmlFor="">Student Name</label>
            <input
              type="text"
              placeholder="Type Name"
              className="border rounded-xl p-3"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <button
              className="bg-cyan-600 px-3 py-2 border rounded-xl text-white"
              onClick={addStudent}
            >
              Add Student
            </button>
          </div>

          {students.map((stdnt, index) => (
            <div
              className="flex flex-col p-3 border rounded-xl bg-amber-100 text-xl"
              key={index}
            >
              <h1>Name : {stdnt.name}</h1>

              <h2>Status :{stdnt.status ? "Present" : "Absent"}</h2>
              <div className="flex justify-center gap-3 m-3">
                <button
                  className="bg-cyan-600 rounded-xl font-bold text-white p-3 w-1/2"
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {stdnt.status ? "🔴Mark Absent" : "🟢Mark Present"}
                </button>
                <button
                  className="bg-cyan-600 rounded-xl font-bold text-white p-3 w-1/2"
                  onClick={() => {
                    remove(index);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-300 p-4 rounded-xl text-2xl">
          <h1>
            Students Present = {attendance}
            {students.length == 0 ? "" : "/" + students.length}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Ex06;
