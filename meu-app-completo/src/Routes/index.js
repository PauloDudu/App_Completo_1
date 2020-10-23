import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Users from '../Pages/Users';
import Users2 from '../Pages/UserDetalhado';
import Login from '../Pages/Login';
import Teste from '../Pages/Teste';
import UsersApijava from '../Pages/UsersApiJava';


export default() => (
    <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/users' exact component={Users} isPrivate />
        <Route path='/users2' exact component={Users2} isPrivate />
        <Route path='/teste' exact component={Teste} isPrivate />
        <Route path='/teste2' exact component={UsersApijava} isPrivate />
    </Switch>
)