import React from 'react';

const MealItem = props =>{
    const item = props.items.map((meal) => <li>{meal.name} <br />
    {meal.description}
    <br />
    {meal.price} <br /></li>)
   return

}
export default MealItem