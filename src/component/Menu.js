import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const navColor = '#0080FD';

export default class Menu extends Component{
    constructor(props){
        super(props);
        console.log(this.props.user);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Menu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        color: "#34495E", fontSize: 20
    }
});