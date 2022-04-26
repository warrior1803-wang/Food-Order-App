import { useRef } from "react";
import Input from "../UI/Card/Input/Input";
import classes from "./MIF.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const submitHandler = event =>{
event.preventDefault();
const enteredAmount = amountInputRef.current.value;
const enteredAmount
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
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
