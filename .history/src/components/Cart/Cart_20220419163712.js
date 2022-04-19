import classes from './Cart.module.css'
const Cart = props =>{
    const cartItem = <ul> [{id:'c1',name:'Sushi',amount:2,price:'12.99'}].map(item=><li>{item.name}</li>);
}</ul>
return(
    <div>
        {cartItem}
        <div>amount</div>
        <div>action</div>
    </div>
)
    
}
export default Cart;
