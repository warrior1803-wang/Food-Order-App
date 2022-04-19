import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItem}
      <div className={classes.total}><span>Total amount</span>
      <span>35.62</span></div>
      <div className={classes.actions}>
          <button className={}>Close</button><button></button>
      </div>
    </div>
  );
};
export default Cart;
