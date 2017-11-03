import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { getItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';

export default class ResetPassword extends Component<{}> {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            phone: '',
        }
    }

    componentWillMount(){
        getItem('isShowSlide').then(res=>{
            console.log(res);
            if(!res){
                this.props.navigation.navigate('FirstSlide');
            }
        });
    }

    authByTouchID(){
        if(Platform.OS === 'android'){
            this.props.navigation.navigate('TouchIDAndroid');
        }
        else{
            this.props.navigation.navigate('TouchIDiOS');
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Image style={styles.logo_black} source={require('../../assets/image/logo_black.png')}/>
                </View>
                <Text style={[styles.text, {textAlign:'center', marginTop: 30}]}>Để lấy lại mật khẩu, vui lòng nhập thông tin số điện thoại hoặc email đã đăng ký để lấy lại mật khẩu</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid='transparent'
                    placeholder = "Số điện thoại"
                    onChangeText={(phone) => this.setState({phone})} value={this.state.phone}
                />
                <View style={{flex: 1, flexDirection:'row'}}>
                    <TouchableOpacity style={{flex: 4}}>
                        <Text style={styles.buttonText}>GỬI</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity style={{flex: 4}} onPress={()=> this.props.navigation.goBack()}>
                        <Text style={styles.buttonText3}>HỦY</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
