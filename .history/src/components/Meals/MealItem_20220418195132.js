import React from 'react';

const MealItem = props =>{
    const item = props.items.map((meal) => <li>{meal.name}</li>
    return(item )

}
export default MealItem