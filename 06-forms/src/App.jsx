import React from "react";
import Forms from "../components/forms";
import InfoCard from "../components/infoCard";
import { useState } from "react";


const App = () => {

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    department: "",
    salary: "",
    joiningDate: "",
    married: false,
  });

  const [employee, setEmployee] = useState(null);

  return (
    <>
      <div className="">
        
        <Forms 
        // props or proerties
          formData = {formData}
          setFormData = {setFormData}
          setEmployee = {setEmployee}
        />


        <InfoCard
        // props or properties
         employee={employee}
         />
        
      </div>
    </>
  );
};

export default App;
