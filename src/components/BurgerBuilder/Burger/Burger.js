import React from 'react'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
import classes from './Burger.module.css'

const Burger = (props) => {

    const ingredients = []
    let i = 0
    for (let ingredient of props.ingredients) {
        ingredients.push(<BurgerIngredient key={ingredient.label + ingredient.count + i} type={ingredient.label} />)
        i++;
    }

    let message = null

    if (ingredients.length === 0) {
        message = <p>Please add your ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient key="breadtop" type="bread-top" />
            {message}
            {ingredients}
            <BurgerIngredient key="breadbottom" type="bread-bottom" />
        </div>
    )
}

export default Burger