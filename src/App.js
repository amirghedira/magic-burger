import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import './App.css';
import 'antd/dist/antd.css'

import Toolbar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import MyOrders from './components/MyOrders/MyOrders'

function App() {
    return (

        <BrowserRouter>
            <Toolbar />
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => <BurgerBuilder />}

                />
                <Route
                    path="/orders"
                    render={() => <MyOrders />}

                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter >
    );
}

export default App;
