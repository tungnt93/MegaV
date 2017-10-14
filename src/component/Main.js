import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class Main extends Component {

    state = {
        modalVisible: false,
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LoginMenu')}}>
                    <Text>Go to login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
});