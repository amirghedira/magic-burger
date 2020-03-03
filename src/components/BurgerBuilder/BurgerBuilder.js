import React, { Component } from 'react'
import BuildControls from './BuildControls/BuildControls'
import Burger from './Burger/Burger'
import axios from 'axios'

class BurgerBuilder extends Component {
    state = {
        ingredients: [],
        Totalprice: 4
    }
    ingredientstatic = [];
    componentDidMount() {
        axios.get('http://localhost:3002/ingredients')
            .then((response) => {
                this.ingredientstatic = this.state.ingredients
                this.setState({
                    ingredients: response.data
                })

            })
            .catch((err) => {
                console.log(err)
            })

    }
    lessMoreFctHandler = (id, action) => {

        let newIngredients = [...this.state.ingredients]

        const i = newIngredients.findIndex(ingredient => {
            return ingredient.id === id
        })

        let price = this.state.Totalprice
        if (action === "add") {
            this.ingredientstatic.push(newIngredients[i])
            newIngredients[i].count++
            price += newIngredients[i].price
        } else {
            let j = 0
            let index = -1
            for (j = this.ingredientstatic.length - 1; j >= 0; j--) {
                if (this.ingredientstatic[j].label === newIngredients[i].label) {
                    index = j;
                    break;
                }


            }
            this.ingredientstatic.splice(index, 1)
            console.log(this.ingredientstatic)
            newIngredients[i].count--
            price -= newIngredients[i].price
        }
        axios.post('http://localhost:3002/updateingredients/' + newIngredients[i].id + '/' + newIngredients[i].count, {
            number: newIngredients[i].count,
        })
            .then(function (response) {
                console.log('done');
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            ingredients: newIngredients,
            Totalprice: price

        })

    }
    render() {
        return (
            <div>
                <Burger ingredients={this.ingredientstatic} />
                <BuildControls ingredients={this.state.ingredients}
                    price={this.state.Totalprice}
                    lessMoreAction={this.lessMoreFctHandler}
                />

            </div>
        )
    }
}
export default BurgerBuilder