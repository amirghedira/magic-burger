import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
var leblli = []
const myHandler = (e) => {
    if (leblli == null)
        leblli.push(e)
    else {
        leblli.splice(0, 1)
        leblli.push(e)
    }
}
const BuildControls = (props) => {
    let components = props.ingredients.map((ingredient) => {

        return <BuildControl key={ingredient.label + ingredient.count}
            status={(ingredient.count > 0) ? false : true}
            label={ingredient.label}
            lessFct={props.lessAction}
            moreFct2={() => { myHandler(ingredient.label) }}
            moreFct={props.moreAction} />
    })
    return (
        <div className={classes.BuildControls}>
            <p>Current price: {props.price} </p>
            {components}
            <button className={classes.OrderButton}>Order Now</button>
        </div>
    )
}
export var helo = leblli
export default BuildControls