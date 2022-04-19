import classes from './Input.module.css'
const Input = props =>{
return(
    <div className={classes.input}>
        <label htmlFor={props.}>{props.label}</label>
        <input type="text" />
    </div>
)
}
export default Input