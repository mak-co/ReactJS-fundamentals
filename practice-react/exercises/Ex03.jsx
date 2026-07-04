import React, {useState} from 'react'

const Ex03 = () => {

    const [celcius,setCelcius]=useState("")
    const [fahrenheit,setFahrenheit]=useState("")
    const [kelvin,setKelvin]=useState("")

 

    const changeF =(e)=>{
     
       const value = Number(e.target.value); 
       if (value === " ") {
         setCelcius("");
         setFahrenheit("");
         setKelvin("");
         return;
       }

      
        setCelcius(((value)-32)*5/9)
        setKelvin((value-32)*5/9 + 273.15);
        setFahrenheit(value)
        console.log("F changing")
    }
    const changeC =(e)=>{
        const value = Number(e.target.value);
        setFahrenheit(((value)*9/5)+32)
        setKelvin(Number(value)+273.15)
        setCelcius(value)
        console.log("C changing");
    }
    

    const changeK =(e)=>{
       const value = Number(e.target.value);
       setFahrenheit(((value-273.15)*9/5)+32)        
       setCelcius((value)-273.15)
       setKelvin(value)
       console.log("K changing");

    }




  return (
    <>
      <div className="bg-white min-h-screen gap-5 flex flex-col justify-center items-center">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-3: Temperature Convertor</h1>
          <h3 className="">
            Goal - Understand
            <ul className="font-sans font-stretch-condensed">
              <li> Multiple controlled inputs</li>
              <li>State synchronization </li>
              <li>Derived values</li>
              <li>Conditional rendering</li>
              <li>Functions</li>
              <li>Preventing infinite updates</li>
            </ul>
          </h3>
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row items-center font-bold text-xl justify-between">
          <label htmlFor="">Celsius - </label>
            <input
              type="number"
              placeholder="Celcius"
              onChange={changeC}
              value={setCelcius}
              className="border p-2 rounded-xl"
            />
          </div>

          <div className="flex flex-row items-center font-bold text-xl justify-between">
          <label htmlFor="">Fahrenheit - </label>
            <input
              type="number"
              placeholder="Fahrenheit"
              value={fahrenheit}
              onChange={changeF}
              className="border p-2 rounded-xl"
            />
          </div>

          <div className="flex flex-row items-center justify-between font-bold text-xl">
            <label htmlFor="">Kelvin - </label>
            <input
              type="number"
              placeholder="kelvin"
              value={kelvin}
              onChange={changeK}
              className="border p-2 rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ex03