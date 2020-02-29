import React, { Component } from 'react'
import BuildControls, { myHandler } from './BuildControls/BuildControls'
import Burger from './Burger/Burger'
import { helo } from './BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {
                label: "salad",
                count: 0,
                price: 2
            },
            {
                label: "cheese",
                count: 0,
                price: 3

            },
            {
                label: "meat",
                count: 0,
                price: 4
            },
            {
                label: "escalope",
                count: 0,
                price: 5
            }
        ],
        Totalprice: 4
    }
    lessMoreFctHandler = (boole) => {
        let ing
        switch (helo[0]) {
            case "salad":
                ing = 0
                break;
            case "cheese":
                ing = 1
                break;

            case "meat":
                ing = 2
                break;
            case "escalope":
                ing = 3
                break;

            default:
                ing = -1
                break;
        }
        let newIngredients = [...this.state.ingredients]
        let price = this.state.Totalprice
        if ((!boole && this.state.ingredients[ing].count > 0) || (boole)) {
            if (boole) {
                newIngredients[ing] = {
                    label: this.state.ingredients[ing].label,
                    count: this.state.ingredients[ing].count + 1,
                    price: this.state.ingredients[ing].price
                }
                price = price + this.state.ingredients[ing].price

            }
            else {
                newIngredients[ing] = {
                    label: this.state.ingredients[ing].label,
                    count: this.state.ingredients[ing].count - 1,
                    price: this.state.ingredients[ing].price
                }
                price = price - this.state.ingredients[ing].price
            }
        }

        this.setState({
            ingredients: newIngredients,
            Totalprice: price

        })
        console.log(this.state.ingredients)
        console.log(newIngredients)

    }
    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredients={this.state.ingredients} price={this.state.Totalprice} lessAction={() => { this.lessMoreFctHandler(false) }} moreAction={() => { this.lessMoreFctHandler(true) }} />

            </div>
        )
    }
}
export default BurgerBuilder