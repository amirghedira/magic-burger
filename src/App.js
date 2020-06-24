import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import './App.css';
import 'antd/dist/antd.css'

import Toolbar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import MyOrders from './components/MyOrders/MyOrders'
import { Switch } from 'antd';

function App() {
    return (

        <BrowserRouter>
            <Toolbar />
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
        </BrowserRouter >
    );
}

export default App;
