import React from 'react';

const MealItem = props =>{
    const item = 
    return( props.items.map((meal) => <li>{meal.name}</li>))

}
export default MealItem