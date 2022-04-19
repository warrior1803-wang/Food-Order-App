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
      <div><span>Total amount</span>
      <span>35.62</span></div>
      <div>action</div>
    </div>
  );
};
export default Cart;
