import React, { useContext,useEffect,useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  const [btnIsHighlighted,setBtnIsHighLighted]=use
 const cartCtx =useContext(CartContext)
 const cartItemNum = cartCtx.items.reduce((curNum,item)=>{return curNum+item.amount },0)
 const btnClasses=`${classes.button} ${classes.bump}`
 useEffect(()=>{

 },[])
  return (
      
    <button className={btnClasses} onClick={props.onOpen} >
      <span className={classes.icon}>
          <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {cartItemNum} </span>
    </button>
  );
};
export default HeaderCartButton;
