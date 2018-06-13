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
import Counter from "../component/Counter";
import {createStore} from 'redux';
import counter from '../reducers/reducer'

const store = createStore(counter);

type Props = {};
export default class ReduxDemo extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            value:0,
        }
        store.subscribe(()=>{this.setState({value:store.getState().count})});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Counter value={this.state.value}
                         OnInCrement={()=>{store.dispatch({type:'INCREMENT'})}}
                         OnDeCrement={()=>{store.dispatch({type:'DECREMENT'})}}/>
            </View>
        );
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
