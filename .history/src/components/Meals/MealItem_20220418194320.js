import React from 'react';

const MealItem = props =>{
    const mealsList = props.map((meal) => <li>{meal.name}</li>);

}
export default MealItem