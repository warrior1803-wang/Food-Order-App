import Input from '../UI/Card/Input/Input'
import classes from './MIF.module.css'
const MealItemForm = props =>{
return(
    <form className={classes.form} action="">
        <Input label="Amount"></Input>
        <button>+Add</button>
    </form>
)
}
export default MealItemForm