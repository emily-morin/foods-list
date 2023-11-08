import React from "react";

const Food = (props) => {
    return (
    <li>
        {props.food}
        <span className="delete" onClick={() => props.deleteFood(props.food)}>X</span>
    </li>
    );
};

export default Food;