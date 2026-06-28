import React, { useState } from 'react'
import axios from "axios"


const App = () => {

  const [userData,setUserData] = useState([]);

 const getData = async () => {
   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=50')

   setUserData(response.data)
  }
 
  

  let printUserData = "No user Avalable"

  if(userData.length > 0){
    printUserData = userData.map(function(elem,index){
      return (
        <div
          key={index}
          className="h-40 w-44 overflow-hidden rounded-xl justify-center text-center"
        >
          <a href={elem.url}>
            {" "}
            <div className="">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    })
  }

  return (
    <div className=' bg-black overflow-auto h-screen p-4 text-white'>

    <button className='bg-green-600 active:scale-95 text-white mb-3 px-5 py-2 rounded' onClick={getData}>Get Data</button>

    <div className='flex flex-wrap m-auto gap-4 '>
      {printUserData}
    </div>
    
    
    </div>
  )
}

export default App
