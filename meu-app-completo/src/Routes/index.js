import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Users from '../Pages/Users';
import Login from '../Pages/Login';


export default() => (
    <Switch>
        <Route path='/' component={Users} exact/>
        <Route path="/Login" component={Login} />
    </Switch>
)