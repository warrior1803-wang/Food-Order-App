import React from 'react'
impo
const Card = props =>{
    return(
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
        )
}
export default Card