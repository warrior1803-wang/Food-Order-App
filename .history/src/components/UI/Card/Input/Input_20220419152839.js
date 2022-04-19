import classes from './Input.module.css'
const Input = props =>{
return(
    <div className={classes.input}>
        <label htmlFor="">{}</label>
        <input type="text" />
    </div>
)
}
export default Input