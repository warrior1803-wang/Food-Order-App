import classes from "./Cart.module.css";
import React, { useContext } from 'react'
import Modal from "../UI/Card/Modal/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const cartItem = (
    <ul className={classes["cart-items"]}>
     
    </ul>
  );
 
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button} >Order</button>
      </div>
      </Modal>
  );
};
export default Cart;
