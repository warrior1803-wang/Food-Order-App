import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes}>
          <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span> 3 </span>
    </button>
  );
};
export default HeaderCartButton;
