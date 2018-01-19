import React from 'react';
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import {Switch, Route, StaticRouter, BrowserRouter} from 'react-router-dom'

import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

const Root = (initialProps, context) => {
    let Router;
    const store = ReactOnRails.getStore('configureStore');
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
        <Provider serverSide={context.serverSide} store={store}>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={LoginContainer}/>
                    <Route path={'/register'} exact component={RegisterContainer}/>
                </Switch>
            </Router>
        </Provider>
    )
};

export default Root;