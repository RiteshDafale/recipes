import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

function Mid() {
  const handleRecipe = async () => {
    console.log("function called");

    const resp = await fetch("https://dummyjson.com/recipes");
    const respjson = await resp.json();
    setRecipe(respjson.recipes);

    console.log(respjson.recipes);

    setlength(respjson.recipes.length);
    for (let i = 0; i <= respjson.recipes.length; i++) {
      console.log(respjson.recipes[i].ingredients);
      // working;
      setingredient(respjson.recipes[i].ingredients);
    }
  };

  const [Recipe, setRecipe] = useState([]);
  const [ingredients, setingredient] = useState([]);
  const [length, setlength] = useState();
  useEffect(() => {
    handleRecipe();
    // console.log("length = "+length);
  }, []);

  return (
    <div>
      <div
        className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-center justify-items-center"
        style={{ backgroundColor: "gray", color: "white" }}
      >
        {Recipe.map((val, ind) => (
          <div key={ind} className="border-1 mt-5 m-0 ">
            <img
              className="object-cover w-100 h-50 "
              src={val.image}
              alt="some issue"
            />
            <p>{val.name} </p>
            <div className="flex justify-between px-3 border-b-1 border-black-500">
              <p>{val.prepTimeMinutes}min.</p>
              <p>Difficulty : {val.difficulty}</p>
            </div>
            <div className="flex justify-between px-3 border-b-1 border-black-500">
              <p> {val.cuisine}</p>
              <p>rating : {val.rating}</p>
            </div>
            <p>Time to Have : {val.mealType}</p>
            <div className="flex justify-between px-3 border-b-1 border-black-500">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Ingredients
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  console.log("instruction " + val.ingredients);
                }}
              >
                Instruction
              </button>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-center"
                      id="exampleModalLabel"
                    >
                      {val.name}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                
                    {val.instructions.map((instruction, index) => (
                      <div key={index}>
                        <p>{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="text-start p-2 ">{val.ingredients}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mid;
