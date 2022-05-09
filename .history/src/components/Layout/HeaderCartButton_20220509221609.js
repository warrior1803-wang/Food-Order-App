import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
 const cartCtx =useContext(CartContext)
 const cartItemNum = cartCtx.items.reduce((curNum,item)=>{return curNum+item.amount },0)
 const btnClasses=`${classes.button} ${c}`
  return (
      
    <button onClick={props.onOpen} className={classes.button} >
      <span className={classes.icon}>
          <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {cartItemNum} </span>
    </button>
  );
};
export default HeaderCartButton;
