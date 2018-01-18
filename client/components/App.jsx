import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import {Switch, Route, StaticRouter, BrowserRouter} from 'react-router-dom'

const App = (initialProps, context) => {
    let Router;

    if (context.serverSide) {
        Router = (props) => (
            <StaticRouter basename={context.base} location={context.location} context={{}} >
                {props.children}
            </StaticRouter>
        );
    }   else  {
        Router = (props) => (
            <BrowserRouter basename={context.base}>
                {props.children}
            </BrowserRouter>
        )
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Register}/>
            </Switch>
        </Router>
    )
};

export default App;