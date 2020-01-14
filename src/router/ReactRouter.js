import React from 'react'
import Navbar from '../components/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
import NotFoundPage from '../pages/NotFound';
import SearchBar from '../components/SearchBar';

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/search" component={Search} />
                    
                    <Route component={NotFoundPage} />
                </Switch>
                <SearchBar />
            </BrowserRouter>
        </div>
    )
}


export default Router;