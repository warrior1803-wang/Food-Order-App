import React from 'react'
const CartContext=React.createContext({
    item:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:(id)=>{}
});
export const CartProvider = props =>{
    const addItemHandler = item =>{};
    const deleteItemHandler = item =>{}
    return(
        <CartContext.Provider onAdd={addItemHandler} onDelete={de}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext