import React, { useState } from "react";

const NewFoodInput = () => {
  const [food, setFood] = useState("");

  const updateFood = (e) => {
    setFood(e.target.value);
  }

  return (
    <form className="food-form">
      <input type="text" value={food} onChange={updateFood} />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
