import React, {useState} from "react";

const Food = (props) => {
    const [tried, setTried] = useState(false);
    
    const tryFood = (e) => {
        let newTried = !tried;
        setTried(newTried);
    }

    return (
    <li
        className={tried ? "strike" : ""}
        onClick={tryFood} 
    >
        {props.food}
        <span className="delete" onClick={() => props.deleteFood(props.food)}>X</span>
    </li>
    );
};

export default Food;