import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import { Switch, Route } from 'react-router-dom'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/register' component={Register}/>
        </Switch>
    </main>
);

export default Main;