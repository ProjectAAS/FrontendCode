import React from 'react';
import NavigationItems from '../NavigationItem/NavigationItems/NavigationItems';
import classes from './NavigationItem.module.css';
import Logo from '../../../Assets/image/Capture.PNG';

const NavigationItem =(props) =>{
  return(
    <div className={classes.NavigationItem}>
      <img src ={Logo} alt='Logo' />
      <NavigationItems link='/'>HOME</NavigationItems>
      {!props.isAuth
       ?<NavigationItems link='/register'>REGISTER</NavigationItems>
       : <NavigationItems link='/logout'>LOGOUT</NavigationItems>}
      <NavigationItems link='/personalinfo'>PERSONAL INFO</NavigationItems>
    </div>
  )
}

export default NavigationItem;