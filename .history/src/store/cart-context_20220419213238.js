import React from 'react'
const CartContext=React.createContext({
    item:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:(id)=>{}
});
export const CartProvider = props =>{
    const addItemHandler = item =>{};
    const removeItemHandler = item =>{}
    return(
        <CartContext.Provider addItem={removeItemHandler} removeItem={deleteItemHandler}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext