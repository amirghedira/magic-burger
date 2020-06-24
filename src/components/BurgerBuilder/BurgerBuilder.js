import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import Modal from './Modal/Modal'
import OrderSummary from './OrderSummary/OrderSummary'
import axios from 'axios'
import loadingGif from '../../assets/images/loading.gif'

class BurgerBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ingredients: [],
            totalPrice: 4,
            showModal: true,
            isLoading: true,
            errorMessage: ''
        }
    }


    addIngredientHandler = (id) => {
        let newIngredient = [...this.state.ingredients]
        let newTotalPrice = this.state.totalPrice

        const index = newIngredient.findIndex((item) => {
            return item._id === id
        })

        newIngredient[index].count++
        newTotalPrice += newIngredient[index].price

        this.setState({
            ingredients: newIngredient,
            totalPrice: newTotalPrice
        })
    }

    removeIngredientHandler = (id) => {
        let newIngredient = [...this.state.ingredients]
        let newTotalPrice = this.state.totalPrice

        const index = newIngredient.findIndex((item) => {
            return item._id === id
        })

        newIngredient[index].count--
        newTotalPrice -= newIngredient[index].price

        this.setState({
            ingredients: newIngredient,
            totalPrice: newTotalPrice
        })
    }

    showOrHideModalHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    resetBurgerHandler = () => {
        axios.patch('http://localhost:5000/ingredients')
            .then(result => {
                const newIngredients = this.state.ingredients.map(ingredient => {
                    ingredient.count = 0;
                    return ingredient
                })
                this.setState({
                    ingredients: newIngredients
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    sendOrderHandler = () => {
        this.setState({
            isLoading: true
        })

        axios.post('http://localhost:5000/order', {
            ingredients: this.state.ingredients
        })
            .then((response) => {
                axios.post('http://localhost:5000/ingredients', { ingredients: this.state.ingredients })
                    .then(result => {
                        this.setState({
                            showModal: false,
                            isLoading: false
                        })
                    })
                    .catch(error => {
                        this.setState({
                            errorMessage: 'Somthing went wrong: ' + error.message
                        })
                    })
            })
            .catch((error) => {
                this.setState({
                    errorMessage: 'Somthing went wrong: ' + error.message
                })
            })
    }

    componentDidMount = () => {

        document.title = 'Magic Burger'
        axios.get('http://localhost:5000/ingredients')
            .then((response) => {
                let totalprice = 4.0;
                response.data.ingredients.forEach(ingredient => {
                    totalprice += ingredient.price * ingredient.count
                })
                this.setState({
                    ingredients: response.data.ingredients,
                    showModal: false,
                    isLoading: false,
                    totalPrice: totalprice
                })
            })
            .catch((error) => {
                this.setState({
                    errorMessage: 'Somthing went wrong: ' + error.message
                })
            })

    }



    render() {

        let modalContent = null

        if (this.state.isLoading) {
            modalContent = (
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3 style={{ width: '80%' }}>Fetching data from the server ..</h3>
                        <img
                            style={{ width: '60px', height: '60px' }}
                            src={loadingGif} alt='laoding' />
                    </div>
                    <div>{this.state.errorMessage}</div>
                </div>
            )
        } else {
            modalContent = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    showOrHideModal={this.showOrHideModalHandler}
                    sendOrder={this.sendOrderHandler}
                />
            )
        }

        return (
            <div>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    resetBurger={this.resetBurgerHandler}
                    totalPrice={this.state.totalPrice}
                    showOrHideModal={this.showOrHideModalHandler}
                />

                <Modal
                    shouldShow={this.state.showModal}
                    showOrHideModal={this.showOrHideModalHandler}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }
}

export default BurgerBuilder