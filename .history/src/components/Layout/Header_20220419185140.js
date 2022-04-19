import React,{useState} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props =>{
  const [show,setShow]=useState(false);
 const ModalCloseHandler = ()=>setShow(false)

return <React.Fragment >
    <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton  onClose={ModalCloseHandler}></HeaderCartButton>
    
    </header>
    <div className={classes['main-image']}>
      <img src="https://www.lironboylston.com/wp-content/uploads/2020/12/WBC_7095-1024x683.jpg" alt="food" />  
    </div>
</React.Fragment>
}
export default Header