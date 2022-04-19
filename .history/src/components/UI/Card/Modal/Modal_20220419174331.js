 import classes from './Modal.module.css'
 import React from 'react'
import Cart from '../../../Cart/Cart'
const Backdrop = props =>{
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}> </div>
    </div>
}
 const Modal = props =>{

     return(
         <React.Fragment>
             <Cart>

             </Cart>
         </React.Fragment>
     )
        
     
 }
 export default Modal