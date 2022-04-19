 import classes from './Modal.module.css'
 import React from 'react'
import ReactDOM from 'react-dom';
const Backdrop = props =>{
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}> {props.children} </div>
    </div>
}const protalElement = document.getElementById

 const Modal = props =>{

     return(
         <React.Fragment>
            {ReactDOM.createPortal(<Backdrop></Backdrop>)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}

         </React.Fragment>
     )
        
     
 }
 export default Modal