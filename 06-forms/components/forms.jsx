import React from "react";
import { useState } from "react";

const Forms = ({formData, setFormData, setEmployee}) => {
  // creating one state of object instead of many states ---- putting it in app.jsx as both form.jsx and infoCard.jsx need to access it 
  // const [formData, SetFormData] = useState({
  //   name: "",
  //   email: "",
  //   age: "",
  //   department: "",
  //   salary: "",
  //   joiningDate: "",
  //   married: false,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployee(formData);
    console.log(formData)
  
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
   
  };


//   array of employee information to reuse it in the input
const employeeInfo = [
  {
    label: "Name",
    name: "name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Age",
    name: "age",
    type: "number",
  },
  {
    label: "Department",
    name: "department",
    type: "text",
  },
  {
    label: "Salary",
    name: "salary",
    type: "number",
  },
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",
  },
];




  //css style variable for input
  const inputStyle =
    "w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        {/* heading */}
        <h1 className="text-3xl font-bold text-center mb-6">Employee Form</h1>

        {/* form */}
        <form
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col"
          onSubmit={handleSubmit}
        >
          {/* input */}
          {/* usign the meployeeInfo array and mapping the info and using that in the input */}

          {employeeInfo.map((info) => (
            <div key={info.name} className="flex items-center gap-4 mb-4">
              <label  className="w-32 font-medium">
                {info.label}
              </label>

              <input
                id={info.name}
                type={info.type}
                name={info.name}
                value={formData[info.name]}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          ))}

          <button
            className="w-full 
            h4 bg-blue-600 text-white
            py-3 rounded-md hover:bg-blue-700 
            font-bold
            "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
