import React, {useState} from 'react'

// Exercise 2 — Live Character Counter
// Goal - Understand that React re-renders every time state changes.



const Ex02 = () => {

    const [text,setText] = useState("")

    
    const wordCount = text
                          .trim()
                          .split(/\s+/)
                          .filter(word => word !== "")
                          .length;



    return (
    <>
      <div className="bg-gray-300 flex flex-col gap-5 justify-center items-center min-h-screen">
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3 font-bold text-center">
          <h1 className='text-2xl'>Ex-2: Live Character Counter.</h1>
          <h3>
            Goal - Understand that React re-renders every time state changes.
          </h3>
        </div>
            <textarea
            type="text" 
            name="" 
            id="input"
            className='w-1/2 border px-2 py-2 rounded-xl text-center'
            onChange={(e)=>{
                 setText(e.target.value)
                 }}
            value={text}
            //Imp - without value we cant  show what is stored inside text , i mean text will get changed by setText but the input will not show this and to show this we need to connect the inputs value with the text(state)'s value 
            placeholder='Type something....' />
            <h2>Characters : {text.length}</h2>
            <h2>Words :{wordCount} </h2>

            <button onClick={()=>{
                setText("")
            }}
            className='bg-cyan-700 py-2 px-3 text-white rounded-xl'
            >Clear</button>
        <div>

        </div>
      </div>
    </>
  );
}

export default Ex02