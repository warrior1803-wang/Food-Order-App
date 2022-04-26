import classes from './Input.module.css'
import React from 'react';

const Input =React.forwardRef() props =>{
return(
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  {...props.input}/>
    </div>
)
}
export default Input