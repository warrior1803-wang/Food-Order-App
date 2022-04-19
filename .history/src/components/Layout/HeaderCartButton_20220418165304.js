import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from 'C:\Users\wang6\Documents\GitHub\Food-Order-App\src\components\Layout\HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  return (
    <button>
      <span>
          <CartIcon></CartIcon>
      </span>
      <span></span>
      <span></span>
    </button>
  );
};
export default HeaderCartButton;
