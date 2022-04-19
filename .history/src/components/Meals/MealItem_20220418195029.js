import React from 'react';

const MealItem = props =>{
    return( props.items.map((meal) => <li>{meal.name}{</li>))

}
export default MealItem