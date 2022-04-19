import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './'
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
