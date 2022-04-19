import React from "react";
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  // const item = props.items.map((meal) => <li>{meal.name} <br />
  // {meal.description}
  // <br />
  // {meal.price} <br /></li>)
  const price =`$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
      <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      
      </div>
      <div>
     <MealItemForm></MealItemForm>
    </li>
  );
};
export default MealItem;
