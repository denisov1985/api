/**
 * Entry point of application
 * @author Dmytro Denysov dmytro@denysov.net
 */
import React from 'react';
import ReactOnRails from 'react-on-rails';
import Root from './containers/Root';
import configureStore from './store/AppStore'

ReactOnRails.registerStore({ configureStore });
ReactOnRails.register({ Root });

