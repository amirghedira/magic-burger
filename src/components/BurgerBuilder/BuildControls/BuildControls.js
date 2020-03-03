import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {
    let components = props.ingredients.map((ingredient) => {

        return <BuildControl key={ingredient.label + ingredient.count}
            status={(ingredient.count > 0) ? false : true}
            label={ingredient.label}
            lessFct={() => { props.lessMoreAction(ingredient.id, "remove") }}
            moreFct={() => { props.lessMoreAction(ingredient.id, "add") }} />
    })
    return (
        <div className={classes.BuildControls}>
            <p>Current price: {props.price} </p>
            {components}
            <button className={classes.OrderButton}>Order Now</button>
        </div>
    )
}
export default BuildControls