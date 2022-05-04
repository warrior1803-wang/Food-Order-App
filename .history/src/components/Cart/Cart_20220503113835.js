import classes from "./Cart.module.css";
import React, { useContext } from 'react'
import Modal from "../UI/Card/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length>0
  const cartItemRemoveHandler = (id)=>{

  }
  const cartItemAddHandler = () =>{

  }
  const cartItem = (
    <ul className={classes["cart-items"]}>
     {cartCtx.items.map((item)=>(
     <CartItem key={item.id} name={item.name} price={item.price} amount = {item.amount} ></CartItem>

     ))}
    </ul>
  );
 
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {hasItems&&<button className={classes.button} >Order</button>}
      </div>
      </Modal> 
  );
};
export default Cart;
