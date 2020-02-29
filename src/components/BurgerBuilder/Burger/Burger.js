import React from 'react'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
import classes from './Burger.module.css'

const Burger = (props) => {

    const ingredients = []
    for (let ingredient of props.ingredients)
        for (let i = 0; i < ingredient.count; i++)
            ingredients.push(<BurgerIngredient key={ingredient.label + ingredient.count + i} type={ingredient.label} />)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient key="breadtop" type="bread-top" />
            {ingredients}
            <BurgerIngredient key="breadbottom" type="bread-bottom" />
        </div>
    )
}

export default Burger