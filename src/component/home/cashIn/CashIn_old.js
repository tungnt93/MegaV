import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal,
    Picker, TouchableHighlight, KeyboardAvoidingView, Dimensions, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../../redux/actionCreators';

import { getItem } from '../../../function/AsyncStorage';
import styles from '../../../assets/style/Style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const banks = [
    {id: 1, name: 'ACB'},
    {id: 2, name: 'AgriBank'},
    {id: 3, name: 'AnBinhBank'},
    {id: 4, name: 'BIDV'},
    {id: 5, name: 'Bắc Á'},
    {id: 6, name: 'Bảo Việt Bank'},
    {id: 7, name: 'Dai a Bank'},
    {id: 8, name: 'Đông Á Bank'},
    {id: 9, name: 'Eximbank'}
];

class Support extends Component<{}>{

}

class CashIn extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            tab1: true,
            tab2: false,
            tab3: false,
            type: 1,
            showBanks: true,
            banks: banks,
            bank: '',
            bankId: 0,
            moneyTopup: '',
            validateMoney: true,
            showSearchBanks: false,
            scrollviewHeight: height - 100
        };
        this.arrItem = [];
    }

    componentDidMount() {
        this.keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardWillShow(e));
        this.keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardWillHide(e));
    }
    componentWillUnmount() {
        this.keyboardWillShowSubscription.remove();
        this.keyboardWillHideSubscription.remove();
    }
    _keyboardWillShow(e) {
        console.log(e.endCoordinates.height);
        this.setState({scrollviewHeight: height - e.endCoordinates.height - 100});
    }
    _keyboardWillHide(e) {
        this.setState({scrollviewHeight: height - 100});
    }

    onChooseBank(e){
        console.log(e);
        this.setState({
            bank: e.name,
            bankId: e.id,
            showSearchBanks: false,
        })
    }

    setMoney(money){
        this.setState({moneyTopup: money})
    }

    render() {
        return (
            <View style={styles.container_dark}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent={true}/>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
                        style={{flex: 1, justifyContent:'center'}}
                    >
                        <Text style={{backgroundColor:'#3d3d3d',  width: 50, paddingVertical: 8, textAlign:'center'}}>
                            <Icon name="menu" style={{color: '#fff', fontSize: 28}}/>
                        </Text>
                    </TouchableOpacity>
                    <View style={{alignItems:'center', flex: 5}}>
                        <Image style={styles.logo} source={require('../../../assets/image/logo_dark.png')}/>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Nạp tiền</Text>
                </View>
                <View style={{flexDirection:'row', marginTop: 10}}>
                    <TouchableOpacity
                        style={this.state.tab1 ? styleTopup.tabActive : styleTopup.tab}
                        onPress={()=>this.setState({
                            tab1: true, tab2: false, tab3: false
                        })}>
                        <Text style={this.state.tab1 ? styleTopup.textTabActive : styleTopup.textTab}>
                            Nạp tiền nhanh
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.tab2 ? styleTopup.tabActive : styleTopup.tab}
                        onPress={()=>this.setState({
                            tab1: false, tab2: true, tab3: false
                        })}>
                        <Text style={this.state.tab2 ? styleTopup.textTabActive : styleTopup.textTab}>
                            Nạp tiền tài khoản liên kết
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.tab3 ? styleTopup.tabActive : styleTopup.tab}
                        onPress={()=>this.setState({
                            tab1: false, tab2: false, tab3: true
                        })}>
                        <Text style={this.state.tab3 ? styleTopup.textTabActive : styleTopup.textTab}>
                            Hỗ trợ thông tin nạp tiền theo phiên
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginTop: 20, borderColor:'#333', borderWidth: 1, padding: 10}}>
                    {this.viewTopupQuick()}
                </ScrollView>
                {this.state.showSearchBanks ? this.viewSearchBank() : null}
            </View>

        );
    }

    viewSearchBank(){
        return(
            <View style={{position:'absolute', flex: 1, width, height, backgroundColor:'rgba(51, 51, 51,0.9)', paddingTop: 30}}>
                <View style={{paddingHorizontal: 10}}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={{backgroundColor: '#fff', color:'#000', fontSize: 16, paddingHorizontal: 10}}
                        value={this.state.textSearch}
                        onChangeText={(text) => this.searchChange(text)}
                        autoFocus={true}
                    />
                    <ScrollView style={{height: this.state.scrollviewHeight}}>
                        {this.state.banks.map((e, i)=>{
                            return(
                                <TouchableOpacity key={i} onPress={()=>this.onChooseBank(e)}>
                                    <Text style={styleTopup.textPicker}>{e.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }

    viewTopupQuick(){
        return(
            <View>
                <Text style={[styles.textNormal, styles.textMenu]}>Phương thức nạp</Text>
                <View style={{backgroundColor: '#333', marginTop: 5}}>
                    <Picker
                        selectedValue={this.state.type}
                        onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}
                        mode='dropdown'
                        style={{ color: '#fff',}}
                    >
                        <Picker.Item label="Thẻ ATM/ Tài khoản ngân hàng" value={1}/>
                        <Picker.Item label="Thẻ visa/ Master card" value={2}/>
                    </Picker>
                </View>
                {this.state.showBanks ?
                    <View>
                        <Text style={[styles.textNormal, styles.textMenu, {marginTop: 20}]}>Ngân hàng: {this.state.bank}</Text>
                        <TouchableHighlight onPress={()=> this.setState({showSearchBanks: !this.state.showSearchBanks})}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={{color:'#fff', fontSize: 16, paddingHorizontal: 10, backgroundColor:'#333', marginTop: 5}}
                                editable = {false}
                                placeholder='Tìm kiếm ngân hàng...'
                                placeholderTextColor = '#ccc'
                                value={this.state.bank}
                            />
                        </TouchableHighlight>
                    </View>
                    : null}
                <Text style={[styles.textNormal, styles.textMenu, {marginTop: 20}]}>Số tiền nạp (đ)</Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={[styleTopup.textInput, this.state.validateMoney ? null : {borderWidth: 1, borderColor: 'red'}]}
                    placeholder='Nhập số tiền cần nạp'
                    placeholderTextColor = '#ccc'
                    value={this.state.moneyTopup}
                    keyboardType='numeric'
                    onChangeText={(moneyTopup) => this.setMoney(moneyTopup)}
                />
                <Text style={[styles.textNormal, styles.textMenu, {marginTop: 20}]}>Phí nạp tiền (đ)</Text>
                <Text style={[styles.textLarge, styles.textGreen, {marginTop: 10}]}>0</Text>
                <Text style={[styles.textNormal, styles.textMenu, {marginTop: 20}]}>Số tiền trừ trên thẻ (đ)</Text>
                <Text style={[styles.textLarge, styles.textGreen, {marginTop: 10}]}>0</Text>
                <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                    <TouchableOpacity style={{flex: 2, marginHorizontal: 5}}>
                        <Text style={styles.buttonText}>Nạp tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, marginHorizontal: 5}}>
                        <Text style={styles.buttonText3}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styleTopup = StyleSheet.create({
    tab:{
        flex: 1,
        borderBottomColor:'transparent',
        borderBottomWidth: 1,
        marginHorizontal: 2,
        alignItems:'center', justifyContent:'center',
        paddingBottom: 5
    },
    tabActive:{
        flex: 1,
        borderBottomColor:'#48b14a',
        borderBottomWidth: 1,
        marginHorizontal: 2,
        alignItems:'center', justifyContent:'center',
        paddingBottom: 5
    },
    textTab:{
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center'
    },
    textTabActive:{
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    },
    textPicker:{
        paddingHorizontal: 10, paddingVertical: 10, color: '#fff', fontSize: 16
    },
    textInput:{
        color:'#fff', backgroundColor:'#333', fontSize: 16, paddingHorizontal: 10, marginVertical: 5
    }
})

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide
    }
}

export default connect(null, actionCreator)(CashIn);