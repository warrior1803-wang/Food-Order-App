import React from 'react'
import classes from 
const Card = props =>{
    return(
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
        )
}
export default Card