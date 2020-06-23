import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'
// const setActive = (props) => {

//   console.log(props.active);

//   if (props.active)
//     return classes.active
//   else
//     return null
// }

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link} className={props.active ? classes.active : null} onClick={props.activateFunction}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem