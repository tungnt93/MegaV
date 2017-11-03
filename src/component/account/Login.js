import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, Dimensions, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { getItem, setItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';
import Loading from '../Loading';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var self;
class Login extends Component<{}> {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        self = this;
        this.state = {
            phone: '',
            name: '',
            isLogged: false,
            password: '',
            showPass: false,
            error: '',
            showLoading: false
        };
        getItem('user').then(res=>{
            if(res){
                console.log(res);
                let user = JSON.parse(res);
                this.setState({
                    phone: user.phone,
                    name: user.name,
                    isLogged: true,
                })
            }
        });
        getItem('theme').then(res=>{
            if(res){
                this.props.setTheme(res);
            }
            else{
                this.props.setTheme('THEME_DARK');
                setItem('theme', 'THEME_DARK', 'TEXT');
            }
        });
        this.action = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({ routeName: 'NavTabs'})
            ]
        });
        console.log('Login load');
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

    login(){
        if(this.state.phone === ''){
            this.setState({error: 'Bạn chưa nhập số điện thoại'});
            // alert('Bạn chưa nhập số điện thoại');
            Alert.alert('Thông báo','Bạn chưa nhập số điện thoại',[{text: 'Đóng'}]);
        }
        else if(this.state.password === ''){
            this.setState({error: 'Bạn chưa nhập mật khẩu'});
            Alert.alert('Thông báo','Bạn chưa nhập mật khẩu',[{text: 'Đóng'}]);
        }
        else{
            // this.props.showLoading('SHOW');
            this.setState({showLoading: true});
            setItem('user', {name: 'Nguyen Thanh Tung', phone: this.state.phone}, 'JSON');
            setTimeout(function () {
                self.props.navigation.dispatch(self.action);
            }, 10)

        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                <Image source={this.props.theme.Background} style={[styles.bgImg]}/>
                <View style={{paddingTop: 38, flex: 1}}>
                    <ScrollView>
                        <View style={{alignItems:'center'}}>
                            <View style={{marginTop: 30}}>
                                <Image style={styles.logo_black} source={this.props.theme.logo}/>
                            </View>
                            <View style={{marginTop: 30}}>
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                    placeholder = "Số điện thoại"
                                    onChangeText={(phone) => this.setState({phone})} value={this.state.phone}
                                    returnKeyType='next'
                                    keyboardType='phone-pad'
                                    onSubmitEditing={() => this.refs['2'].focus()}
                                />
                                <View style={{position:'relative'}}>
                                    <TextInput
                                        style={styles.textInput}
                                        underlineColorAndroid='transparent'
                                        placeholder = "Mật khẩu"
                                        secureTextEntry={!this.state.showPass}
                                        onChangeText={(password) => this.setState({password})} value={this.state.password}
                                        returnKeyType = 'go'
                                        ref="2"
                                    />
                                    <TouchableOpacity
                                        style={{position:'absolute', top: 0, right: 0, padding: 10}}
                                        onPress={()=>this.setState({showPass: !this.state.showPass})}>
                                        <Ionicons name= {this.state.showPass ? 'ios-eye-off-outline': 'ios-eye-outline'}
                                              style={{fontSize: 32, color:'#333'}}/>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={()=>this.login()}>
                                    <Text style={[styles.buttonText, {backgroundColor: this.props.theme.bgButton}]}>ĐĂNG NHẬP</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{}} onPress={()=> this.props.navigation.navigate('ResetPassword')}>
                                    <Text style={styles.buttonText2}>QUÊN MẬT KHẨU</Text>
                                </TouchableOpacity>
                                {this.state.isLogged ?
                                    <View>
                                        <View style={{alignItems:'center'}}>
                                            <TouchableOpacity
                                                onPress={()=> this.authByTouchID()}
                                                style={{alignItems:'center', marginTop: 10, width:60}}
                                            >
                                                <Ionicons name="md-finger-print" size={40} color="#fff"/>
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{fontSize: 14, color:'#fff', textAlign:'center', marginTop:5}}>Đăng nhập bằng vân tay</Text>
                                        <View style={{alignItems:'center'}}>
                                            <TouchableOpacity
                                                onPress={()=> this.setState({phone: '', isLogged: false, password: ''})}
                                                style={{alignItems:'center', marginTop: 10, width:60}}
                                            >
                                                <Ionicons name="ios-phone-portrait" size={40} color="#fff"/>
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{fontSize: 14, color:'#fff', textAlign:'center', marginTop:5}}>Đổi số điện thoại</Text>
                                    </View>
                                    :
                                    <View>
                                        <View style={{marginTop: 30}}>
                                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
                                                <Text style={styles.btnRegister}>Đăng ký</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </ScrollView>

                </View>
                {this.state.showLoading ? <Loading/> : null}

            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        theme: state.theme,
        // showLoading: state.showLoading
    }
}

export default connect(mapStateToProps, actionCreator)(Login);
