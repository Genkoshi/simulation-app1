import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Bin from './components/Bin';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/bins/:id' component={Bin}/>
        {/* <Route path='/bin/:id' component={}/>
        <Route path='/create/:id' component={}/> */}
    </Switch>
)