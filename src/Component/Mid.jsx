import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

function Mid() {
  const handleRecipe = async () => {
    console.log("function called");

    const resp = await fetch("https://dummyjson.com/recipes");
    const respjson = await resp.json();
    // console.log(respjson.recipes);
    setRecipe(respjson.recipes);
  };

  const [Recipe, setRecipe] = useState([]);
  useEffect(() => {
    handleRecipe();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(Recipe);

  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-center justify-items-center ">
        {Recipe.map((val, ind) => (
          <div key={ind} className="border-1 mt-5">
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <p className="absolute top-52 left-52 text-amber-400">
                  {val.ingredients}
                </p>
              </div>
            </Modal>
            <img
              className="object-cover w-70 h-50 "
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
              <button className="btn btn-primary" onClick={handleOpen}>
                Reciepy
              </button>
              <button className="btn btn-primary">Instruction</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mid;
