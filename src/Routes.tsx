import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/Home'
import Searchs from './pages/Searchs';


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/searchs">
                <Searchs />
            </Route>
        </Switch>

    </BrowserRouter>

);


export default Routes;