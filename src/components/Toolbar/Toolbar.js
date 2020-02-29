import React from 'react'
import NavigationItem from './NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
import LogoImage from '../../assets/images/logo.png'
const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <div>
                Menu
            </div>
            <div className={classes.Logo}>
                <img src={LogoImage} alt="Burger Magic" />
            </div>
            <NavigationItem />
        </div>
    )
}
export default Toolbar