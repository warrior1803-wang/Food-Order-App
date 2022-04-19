import React from 'react';

const MealItem = props =>{
    const item = <li>{meal.name}</li>
    return( props.items.map((meal) => <li>{meal.name}</li>))

}
export default MealItem