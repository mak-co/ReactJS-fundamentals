import React from 'react'

const Ex07 = () => {
  return (
    <>
      <div className="bg-white min-h-screen gap-5 flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="bg-black text-white px-4 py-4 rounded-xl mt-3  text-center">
          <h1 className="text-2xl font-bold">Ex-7: Inventory Manager</h1>
          <h3 className="">
            Goal - Understand how to change one object inside an array while
            leaving every other object untouched.
          </h3>
        </div>

        <div className="flex flex-col gap-7 ">
          {/* Inpput Box */}
          <div
            className="border rounded-xl bg-amber-100 p-4 minhsc
            flex flex-col gap-2 "
          >
            <h1 className="text-2xl text-center font-bold m-3">
              Inventory Manager
            </h1>
            <div className="flex flex-row gap-3 text-xl items-center font-bold">
              <label htmlFor="" className="">
                Product Name
              </label>
              <input
                type="text"
                className="border rounded-xl px-3 py-2"
                placeholder="Type Product Name"
              />
            </div>

            <div className="flex flex-row gap-3 text-xl items-center font-bold">
              <label htmlFor="">Quantity - </label>
              <h2 id="quantity">15</h2>
            </div>

            <div className="flex justify-center">
              <button className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2">
                Add Product
              </button>
            </div>
          </div>

          {/* Card */}
          <div
            className="border rounded-xl bg-amber-100 p-4 minhsc
            flex flex-col gap-2 "
          >
            <h1 className="text-2xl font-bold text-center">Product Name</h1>
            <h1 className="text-2xl font-bold text-center">Stock - </h1>

            <div className="flex flex-row gap-4 m-2">
              <button className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2">
                + Increase
              </button>
              <button className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2">
                - Decrease
              </button>
            </div>

            {/* button div */}
            <div className="flex flex-row gap-4 m-2">
              <button className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2">
                Edit
              </button>
              <button className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          className="border rounded-xl bg-amber-100 p-4 minhsc
            flex flex-col gap-2"
        >
          <h1 className="text-2xl font-bold text-center">
            Inventory Statistics
          </h1>

          <h1 className="text-xl font-bold ">Total Products : </h1>
          <h1 className="text-xl font-bold ">Total Stock : </h1>
          <h1 className="text-xl font-bold ">Out of Stock :</h1>
        </div>
      </div>
    </>
  );
}

export default Ex07