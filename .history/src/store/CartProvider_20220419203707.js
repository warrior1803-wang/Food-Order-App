import CartContext from "./cart-context"

const CartProvider = props =>{
    return(
        <CartContext.Provider>
            {props.childr}
        </CartContext.Provider>
    )
}
export default CartProvider