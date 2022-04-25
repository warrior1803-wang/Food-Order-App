import React from 'react'
const CartContext=React.createContext({
    item:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:(id)=>{}
});
export const CartProvider = props =>{
    const addItemToCart
    return(
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext