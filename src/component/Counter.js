import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Counter extends Component {

    render(){
        const {OnInCrement,OnDeCrement,value} = this.props;
        return(
            <View style={styels.container}>
                <Text style={styels.text} onPress={OnInCrement}>Increment</Text>
                <Text style={styels.text} onPress={OnDeCrement}>Decrement</Text>
                <Text style={styels.text}>{value}</Text>
            </View>
        )
    }
}

const styels = StyleSheet.create({
    container:{
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        marginTop:10,
    }
})