import React,{useState} from 'react'

const Ex04 = () => {

const [w,setW]= useState("")
const [h,setH]= useState("")
const [bmi,setBmi]=useState("")
 
  //bmi foumula
const calBmi = ()=>{
  setBmi(w && h ? ((w / (h**2))*10000).toFixed(2) : "")
}
//so first we are calculating the bmi using the w and h states and 




  return (
    <>
      <div className="bg-gray-300 min-h-screen gap-5 flex flex-col justify-center items-center">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-4: BMI Calculator </h1>
          <h3 className="">
            Goal - Understand
            <ul className="font-sans font-stretch-condensed">
              <li> Multiple controlled inputs</li>
              <li>Derived Values</li>
              <li>Conditional rendering</li>
            </ul>
          </h3>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-4 justify-between">
            <label
              htmlFor=""
              className="font-bold text-2xl items-center justify-center "
            >
              Weight in kg
            </label>
            <input
              type="number"
              className="border p-2 rounded-xl font-bold"
              onChange={(e) => {
                setW(Number(e.target.value));
              }}
              value={w}
            />
          </div>

          <div className="flex flex-row gap-4   justify-between">
            <label
              htmlFor=""
              className="font-bold text-2xl items-center justify-center "
            >
              Height in CentiMeter
            </label>
            <input
              type="number"
              className="border p-2 rounded-xl font-bold"
              onChange={(e) => {
                setH(Number(e.target.value));
              }}
              value={h}
            />
          </div>

          <button
            className="border bg-cyan-600 text-2xl rounded-xl font-bold text-white border-black transform active:scale-95 py-2 "
            onClick={calBmi}
          >
            Check BMI
          </button>
        </div>

        <div>
          {bmi && (
            <div
              id="bmiCard"
              className="bg-black text-white text-3xl font-bold justify-center items-center p-4 rounded-xl border-white"
            >
              <h1>BMI - {bmi}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Ex04