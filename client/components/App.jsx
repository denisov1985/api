import React from 'react';
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import Root from '../containers/Root'
import {Switch, Route, StaticRouter, BrowserRouter} from 'react-router-dom'

const App = (initialProps, context) => {
    let Router;
    const store = ReactOnRails.getStore('configureStore')
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
        <Provider store={store}>
            <Router>
                <Root/>
            </Router>
        </Provider>
    )
};

export default App;