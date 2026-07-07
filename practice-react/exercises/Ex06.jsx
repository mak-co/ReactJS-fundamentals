import React, { useState } from "react";

const Ex06 = () => {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");

  const [present, setPresent] = useState(false);

  const [attendance, setAttendance] = useState();

  // toggle button
  const toggle = (index) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, status: !student.status } : student,
      ),
    );

    if (student.status) {
      setAttendance((prev) => {
        prev + 1;
      });
    }
  };

  console.log(present);
  const addStudent = () => {
    const newStudent = { name: input, status: present };
    if (input === "") {
      return;
    }

    setStudents((prev) => [...prev, newStudent]);
    setInput("");
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
              <div className="flex justify-center">
                <button
                  className="bg-cyan-600 rounded-xl font-bold text-white p-3 w-1/2"
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {stdnt.status ? "🔴Mark Absent" : "🟢Mark Present"}
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
