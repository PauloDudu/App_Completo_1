import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Users from '../Pages/Users';
import Users2 from '../Pages/UserDetalhado';
import Login from '../Pages/Login';
import CepUsers from '../Pages/CepUsers';
import Dashboard from '../Pages/Dashboard';

export default() => (
    <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/dashboard' component={Dashboard} exact isPrivate />
        <Route path='/users' component={Users} isPrivate />
        <Route path='/users2' component={Users2} isPrivate />
        <Route path='/cep' component={CepUsers} isPrivate />
    </Switch>
)