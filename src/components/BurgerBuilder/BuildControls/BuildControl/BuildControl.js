import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props) => {

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} disabled={props.status} onMouseEnter={props.moreFct2} onClick={props.lessFct}>Less</button>
            <button className={classes.More} onMouseEnter={props.moreFct2} onClick={props.moreFct}>More</button>
        </div >
    )
}
export default BuildControl