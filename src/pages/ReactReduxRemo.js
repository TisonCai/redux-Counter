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
import {connect,Provider} from 'react-redux'
import {createStore} from 'redux'
import Counter from '../component/Counter'
import reducer from '../reducers/reducer'


// actionCreator
const actionCreator = (type) => {
    return {type:type}
}

const mapStateToProps = (state) => {
    return {
        value:state.count
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        OnInCrement:() => {
            dispatch(actionCreator('INCREMENT'))
        },
        OnDeCrement:() => {
            dispatch(actionCreator('DECREMENT'))
        }
    }
}

const VisibleCounter = connect(mapStateToProps,mapDispatchToProps)(Counter)
let store = createStore(reducer)
type Props = {};
export default class ReactReduxRemo extends Component<Props> {
    render(){
        return (
            <Provider store={store}>
                <VisibleCounter/>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
