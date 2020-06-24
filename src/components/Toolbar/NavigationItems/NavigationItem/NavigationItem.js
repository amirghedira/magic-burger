import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link} className={props.active ? classes.active : null} onClick={props.activateFunction}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem