import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import Food from "./Food";
import "./styles.css";

export default function App() {
  const [foodsToTry, setFoodsToTry] = useState([]);

  const addFoodItem = (food) => {
    let foodsArr = [...foodsToTry];
      foodsArr.push(food);
      setFoodsToTry(foodsArr);
    // setFoodsToTry([...foodsToTry, food]); <-- also works
  }

  const deleteFood = (foodToDelete) => {
    let updatedFoods = foodsToTry.filter(f => f !== foodToDelete);
    setFoodsToTry(updatedFoods);
  }
  
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput addFoodItem={addFoodItem} />
      <ul className="food-list">
        {foodsToTry.map((f) => {
          return <Food key={f} food={f} deleteFood={deleteFood} />
        })}
      </ul>
    </div>
  );
}
