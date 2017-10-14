import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../redux/actionCreators';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ImageFull extends Component<{}> {
    constructor(props){
        super(props);
        this.state = { age: 18 }

    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Image style={styles.image} source={require('../../assets/image/intro.jpg')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#9DD6EB'
    },
    image:{
        width,height,
        flex: 1,
        resizeMode: 'stretch',
        alignSelf: "stretch"
    }
});