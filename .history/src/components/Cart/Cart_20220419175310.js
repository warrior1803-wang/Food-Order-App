import classes from "./Cart.module.css";
import React, { useState } from 'react'
import Modal from "../UI/Card/Modal/Modal";
const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
 const [show,setShow]=useState(false)
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
  );
};
export default Cart;
