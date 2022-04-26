import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
 const cartCtx =useContext(CartContext)
 const cartItemNum = cartCtx.item.reduce(()=>{})
  return (
      
    <button onClick={props.onOpen} className={classes.button} >
      <span className={classes.icon}>
          <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> 3 </span>
    </button>
  );
};
export default HeaderCartButton;
