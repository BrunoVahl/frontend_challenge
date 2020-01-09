import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Cadaster from '../components/cadaster/Cadaster'
import User from '../components/user/User'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadaster' component={Cadaster} />
        <Route path='/users' component={User} />
        <Redirect from='*' to='/' />
    </Switch>