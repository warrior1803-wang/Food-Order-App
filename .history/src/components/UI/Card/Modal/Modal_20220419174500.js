 import classes from './Modal.module.css'
 import React from 'react'

const Backdrop = props =>{
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}> {props.children} </div>
    </div>
}
 const Modal = props =>{

     return(
         <React.Fragment>
            
         </React.Fragment>
     )
        
     
 }
 export default Modal