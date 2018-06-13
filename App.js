/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Counter from "./src/component/Counter";
import {createStore} from 'redux';
import counter from './src/reducers/reducer'
import ReduxDemo from './src/pages/ReduxDemo'
import MainPage from "./src/pages/MainPage";
import ReactReduxRemo from "./src/pages/ReactReduxRemo";

const store = createStore(counter);


const APP = createStackNavigator({
    MainPage:{
      screen:MainPage,
    },
    ReduxDemo:{
      screen:ReduxDemo,
    },
    ReactReduxRemo:{
        screen:ReactReduxRemo,
    },

})

type Props = {};
export default APP