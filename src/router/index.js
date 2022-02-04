import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Register from '../views/auth/Register';
import Login from '../views/auth/Login';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import * as Middleware from '../middleware';
import * as Series from '../views/playlist/App';
import * as Lessons from '../views/lessons/App';
import Cart from '../views/orders/Cart';
import PaymentSuccess from '../views/orders/PaymentSuccess';

export default function ReactRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/series" component={Series.Index}/>
                <Route exact path="/series/:slug" component={Series.Show}/>
                <Route path="/series/:slug/:episode" component={Lessons.Show}/>

                <Route path="/login">
                    <Middleware.Guest render={<Login/>}/>
                </Route>

                <Route path="/register">
                    <Middleware.Guest render={<Register/>}/>
                </Route>

                <Route path="/dashboard">
                    <Middleware.Authenticated render={<Dashboard/>}/>
                </Route>

                <Route path="/your-cart">
                    <Middleware.Authenticated render={<Cart/>}/>
                </Route>
                
                <Route path="/your-payment-success">
                    <Middleware.Authenticated render={<PaymentSuccess/>}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
