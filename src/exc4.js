/**
 * Created by JZG on 2018/4/23.
 */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
export default class LotsofStyles extends Component {
    render() {

    }

}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'blod',
        fontSize: 30,
    },
    red: {
        color: 'red',
    }
});
AppRegistry.registerComponent('lotsofStyles',()=>LotsofStyles)
