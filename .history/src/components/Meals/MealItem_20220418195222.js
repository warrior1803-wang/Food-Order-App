import React from 'react';

const MealItem = props =>{
    const item = props.items.map((meal) => <li>{meal.name}<br></br>
    {meal.des}</li>)
    return(item )

}
export default MealItem