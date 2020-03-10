/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {startApp} from './App';
import {name as appName} from './app.json';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = (state, action) => {
    console.log(state, action);
}

const store = createStore(rootReducer);

// AppRegistry.registerComponent(appName, () => App);
startApp(store, Provider);

