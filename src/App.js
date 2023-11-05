import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";

export default function App() {
  const [foodsToTry, setFoodsToTry] = useState([]);

  const addFoodItem = (food) => {
    let foodsArr = [...foodsToTry];
    foodsArr.push(food);
    setFoodsToTry(foodsArr);
  }
  
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput addFoodItem={addFoodItem} />
      <ul className="food-list">
        {foodsToTry.map((f, index) => {
          return <li key={index}>{f}</li>
        })}
      </ul>
    </div>
  );
}
