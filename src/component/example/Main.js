import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LoginMenu')}}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyShare')}}>
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TouchIDAndroid')}}>
                    <Text style={styles.buttonText}>Touch ID</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('QRCode')}}>
                    <Text style={styles.buttonText}>QR Code</Text>
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
    },
    buttonText:{
        padding: 10,
        backgroundColor: '#28ABE3',
        color: '#fff',
        fontSize: 20,
        marginVertical: 10
    }
});