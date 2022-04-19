import React from 'react';

const MealItem = props =>{
    return( props.map((meal) => <li>{meal.name}</li>))

}
export default MealItem