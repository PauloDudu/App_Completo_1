import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Users from '../Pages/Users';



export default() => (
    <Switch>
        <Route path='/' component={Users} exact/>
    </Switch>
)