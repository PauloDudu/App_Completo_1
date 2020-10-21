import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Users from '../Pages/Users';
import Login from '../Pages/Login';
import Teste from '../Pages/Teste';


export default() => (
    <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/users' exact component={Users} isPrivate />
        <Route path='/teste' exact component={Teste} isPrivate />
    </Switch>
)