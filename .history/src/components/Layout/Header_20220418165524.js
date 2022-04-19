import React from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props =>{
return <React.Fragment >
    <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton></HeaderCartButton>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src="https://www.lironboylston.com/wp-content/uploads/2020/12/WBC_7095-1024x683.jpg" alt="food" />  
    </div>
</React.Fragment>
}
export default Header