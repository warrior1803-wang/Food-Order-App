import React from 'react'
const CartContext=React.createContext({
    item:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:(id)=>{}
});
export const CartProvider = props =>{
    const addItemHandler = item =>{};
    const del
    return(
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext