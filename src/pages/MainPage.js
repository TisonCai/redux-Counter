import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MainPage extends Component {
    render(){
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.text} onPress={()=>{navigate('ReduxDemo')}}>ReduxDemo</Text>
                <Text style={styles.text} onPress={()=>{navigate('ReactReduxRemo')}}>React-reduxDemo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        flex:1,
    },
    text:{
        marginTop:20,
    }
})