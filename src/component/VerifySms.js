
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import SmsListener from 'react-native-android-sms-listener';


export default class VerifySms extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            message: 'message',
            from:'from',
            code:'code'
        };
        this.smsListener = null;
    }

    componentWillMount(){
        console.log('mount');
        this.smsListener = SmsListener.addListener((message) => {
            console.log(message.body);
            if(message.originatingAddress === '1234'){
                this.setState({
                    message: message.body,
                    from: message.originatingAddress,
                    code: message.body.split(' ')[0]
                })
            }
        })
    }

    componentWillUnmount(){
        console.log('unmount');
        this.smsListener.remove();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>From: {this.state.from}</Text>
                <Text style={styles.text}>Message: {this.state.message}</Text>
                <Text style={styles.text}>Code: {this.state.code}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 50
    },
    text:{
        fontSize: 20,
        color: '#000'
    }
});