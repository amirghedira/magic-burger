import React, { Component } from 'react'
import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'

class Burger extends Component {

    render() {

        let list = []

        for (let item of this.props.ingredients) {
            for (let i = 0; i < item.count; i++) {
                list.push(
                    <Ingredient type={item.label} key={item._id + '_' + i} />
                )
            }
        }

        let message = null

        if (list.length === 0)
            message = <p>Please start adding ingredients !!</p>

        return (
            <div className={classes.Burger}>
                <Ingredient type="BreadTop" />
                {message}
                {list}
                <Ingredient type="BreadBottom" />
            </div>
        )
    }
}

export default Burger