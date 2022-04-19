import React from "react";
import classes from './MealItem.module.css'
const MealItem = (props) => {
  // const item = props.items.map((meal) => <li>{meal.name} <br />
  // {meal.description}
  // <br />
  // {meal.price} <br /></li>)
  const price =`$${props.price.toFixed(2)}`
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.}>{props.description}</div>
      <div>{price}</div>
      <div>

      </div>
    </li>
  );
};
export default MealItem;
