import Input from "../UI/Card/Input/Input";
import classes from "./MIF.module.css";
const MealItemForm = (props) => {
  const submitHandler = event =>{
    
  }
  return (
    <form className={classes.form} action="">
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_"+props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      ></Input>
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;
