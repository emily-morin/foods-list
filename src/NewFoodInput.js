import React, { useState } from "react";

const NewFoodInput = () => {
  const [food, setFood] = useState("");

  return (
    <form className="food-form">
      <input type="text" />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
