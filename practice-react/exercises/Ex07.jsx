import React, { useState } from "react";

const Ex07 = () => {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(""); //e.target.value always gives string even if it is a number
  
  const [editingIndex, setEditingIndex] = useState(null);

  //create function for addproduct button
  //can't use return in ternary operator therefore using the if else
  const addProduct = () => {
    console.log("addproduct running")
    if (name.trim() === "" || quantity.trim() === "") {
      return;
    } else {
      setProducts((prev) => [
        ...prev,
        { pname: name, pquant: Number(quantity) },
      ]);
    }
    setName("");
    setQuantity("");
    setEditingIndex(null);
  };

  //create update product funciton
  //to use if statement after an arrow function use { if statement}
  // and If you use curly braces, you lose the automatic return.
  const updateProd = () => {
    setProducts((prev) =>
      prev.map((item, index) => {
        if (index === editingIndex) {
          return { pname: name, pquant: Number(quantity) };
        } else {
          return item;
        }
      }),
    )
    setName("");
    setQuantity("");
    setEditingIndex(null);
  };

  //create function for delete button
  //to remove best way/appraoch is to filter
  //first parameter (_) is the element value, which we ignore
  const deleteObj = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  //create decrease and increase button function
  //increase funciton
  const inc = (index) => {
    setProducts((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, pquant: item.pquant + 1 } : item,
      ),
    );
  };

  // decrase function

  const dec = (index) => {
    //using nested ternary for not decrement below zero
    setProducts((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, pquant: item.pquant > 0 ? item.pquant - 1 : 0 }
          : item,
      ),
    );
  };

  // Edit function

  const edit = (index) => {
    setEditingIndex(index);
    setName(products[index].pname);
    setQuantity(products[index].pquant.toString());
  };

//out of stock const
//if you use curly braces in arrow funciton then you need to return the value 
const outofStock = products.reduce((count, quantityValue) => {
  if (quantityValue.pquant === 0) {
    return count + 1;
  } else {
    return count
  }
}, 0);

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

        <div className="flex flex-col gap-5 ">
          {/* Inpput Box */}
          <div
            className="border rounded-xl bg-amber-50 p-4 minhsc
            flex flex-col gap-2"
          >
            <h1 className="text-2xl text-center font-bold m-3 ">
              Inventory Manager
            </h1>
            <div className="flex flex-row gap-3 text-xl items-center font-bold justify-between ">
              <label htmlFor="" className="">
                Product Name
              </label>
              <input
                value={name}
                type="text"
                className="border rounded-xl px-3 py-2"
                placeholder="Type Product Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-row gap-3 text-xl items-center font-bold justify-between ">
              <label htmlFor="" className="">
                Quantity
              </label>
              <input
                value={quantity}
                type="number"
                className="border rounded-xl px-3 py-2"
                placeholder="Type Product Quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-cyan-600  hover:brightness-110 active:translate-y-1 active:border-b-0 transition-all duration-100 text-xl px-2 py-1 text-white rounded-xl w-1/2"
                onClick={
                  //dont use ()=> or arrow funciton just pass this dirctly
                  editingIndex === null ? addProduct : updateProd
                }
              >
                {editingIndex === null ? "Add Product" : "Update Product"}
              </button>
            </div>
          </div>

          {/* Card */}

          {products.map((prod, index) => (
            //note- Each child in a list should have a unique "key" prop.
            <div
              className="border rounded-xl bg-black p-4 minhsc
            flex flex-col gap-2 "
              key={index}
            >
              <h1 className="text-2xl font-bold text-center text-white">
                Product Name - {prod.pname}
              </h1>
              <h1 className="text-2xl font-bold text-center text-white">
                Quantity - {prod.pquant}
              </h1>

              <div className="flex flex-row gap-4 m-2">
                <button
                  className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2  hover:brightness-110 active:translate-y-1 active:border-b-0 transition-all duration-75"
                  onClick={() => inc(index)}
                >
                  + Increase
                </button>
                <button
                  className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2 hover:brightness-110 active:translate-y-1 active:border-b-0 transition-all duration-75"
                  onClick={() => dec(index)}
                >
                  - Decrease
                </button>
              </div>

              {/* button div */}
              <div className="flex flex-row gap-4 m-2">
                <button
                  className="bg-cyan-600 text-xl px-2 py-1 text-white rounded-xl w-1/2 hover:brightness-110 active:translate-y-1 active:border-b-0 transition-all duration-75"
                  onClick={() => {
                    edit(index);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-xl px-2 py-1 text-white rounded-xl w-1/2 hover:brightness-110 active:translate-y-1 active:border-b-0 transition-all duration-75"
                  onClick={() => deleteObj(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Statistics Section */}
          <div
            className="border rounded-xl bg-amber-50 p-4 minhsc
            flex flex-col gap-2"
          >
            <h1 className="text-2xl font-bold text-center">
              Inventory Statistics
            </h1>

            <h1 className="text-xl font-bold ">
              Total Products : {products.length}{" "}
            </h1>
            {/* only arrays have a .reduce() method  & 0 is the initial value of the accumulator (here total)*/}
            <h1 className="text-xl font-bold ">
              Total Stock :{" "}
              {products.reduce((total, product) => {
                return total + product.pquant;
              }, 0)}{" "}
            </h1>

            {/* Never call setState while rendering */}
            <h1 className="text-xl font-bold ">
              Out of Stock :{outofStock}
            </h1>
          </div>
        </div>

        {/* body div */}
      </div>
    </>
  );
};

export default Ex07;
