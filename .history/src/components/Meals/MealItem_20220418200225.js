import React from "react";

const MealItem = (props) => {
  // const item = props.items.map((meal) => <li>{meal.name} <br />
  // {meal.description}
  // <br />
  // {meal.price} <br /></li>)
  const price =`$${}`
  return (
    <li>
      <div className="div">
        <h3>{props.name}</h3>
      </div>
      <div className="div">{props.description}</div>
      <div>{props.price}</div>
    </li>
  );
};
export default MealItem;
