import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';
import styles from '../../assets/style/Style';

const width = Dimensions.get('window').width;

class History extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            tabDay: false,
            tabWeek: true,
            tabMonth: false,
            tabYear: false
        }
        //iconType: 0-nap tien, 1-shopping, 2-hoa don
        this.arrHistory = [
            {id: 1, day: 'Thứ 6', date:'27/10', iconType: 1, type: 1, money: 40000, des: 'Thanh toán vé xem phim', status: true},
            {id: 2, day: 'Thứ 5', date:'26/10', iconType: 2, type: 1, money: 150000, des: 'Thanh toán tiền điện', status: false},
            {id: 3, day: 'Thứ 4', date:'25/10', iconType: 0, type: 2, money: 40000, des: 'Nạp tiền', status: true},
        ]
        this.arrIcon = [this.props.theme.icon.CashIn, this.props.theme.icon.Shoping, this.props.theme.icon.InvoicePayment];
        console.log('History load');
    }

    historyDay(){
        this.setState({tabDay: true, tabWeek: false, tabMonth: false, tabYear: false});
    }

    historyWeek(){
        this.setState({tabDay: false, tabWeek: true, tabMonth: false, tabYear: false});
    }

    historyMonth(){
        this.setState({tabDay: false, tabWeek: false, tabMonth: true, tabYear: false});
    }

    historyYear(){
        this.setState({tabDay: false, tabWeek: false, tabMonth: false, tabYear: true});
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                <Image style={{width, height: 200, resizeMode: 'stretch', position:'absolute'}} source={require('../../assets/image/bg-gray.png')}/>
                <View style={{flexDirection: 'row', justifyContent:'center', paddingTop: 35, paddingBottom: 12, backgroundColor: this.props.theme.bgColorHome}}>
                    <TouchableOpacity style={{flex: 1, justifyContent:'center'}}>
                        <Icon name="calendar" style={{color: '#fff', fontSize: 24, textAlign:'center'}}/>
                    </TouchableOpacity>
                    <View style={{alignItems:'center', justifyContent:'center', flex: 5}}>
                        <Text style={[styles.textWhite, styles.textBig, styles.textBold]}>Lịch sử giao dịch</Text>
                    </View>
                    <TouchableOpacity style={{flex: 1, justifyContent:'center'}}>
                        <Icon name="bell-o" style={{color: '#fff', fontSize: 25, textAlign:'center'}}/>
                    </TouchableOpacity>
                </View>
                <View style={[styleHistory.tab, {backgroundColor: this.props.theme.bgColor, borderColor: this.props.theme.borderColor}]}>
                    <TouchableOpacity style={{flex: 1}} onPress={()=>this.historyDay()}>
                        <Text style={[styles.textNormal, styles.textCenter, {color: this.state.tabDay ? this.props.theme.textActive : this.props.theme.textNotActive}]}>1 NGÀY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={()=>this.historyWeek()}>
                        <Text style={[styles.textNormal, styles.textCenter, {color: this.state.tabWeek ? this.props.theme.textActive : this.props.theme.textNotActive}]}>1 TUẦN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={()=>this.historyMonth()}>
                        <Text style={[styles.textNormal, styles.textCenter, {color: this.state.tabMonth ? this.props.theme.textActive : this.props.theme.textNotActive}]}>1 THÁNG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={()=>this.historyYear()}>
                        <Text style={[styles.textNormal, styles.textCenter, {color: this.state.tabYear ? this.props.theme.textActive : this.props.theme.textNotActive}]}>1 NĂM</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{backgroundColor: this.props.theme.bgColor}}
                    data={this.arrHistory}
                    keyExtractor={(item, index) => index}
                    renderItem = {({item})=>
                        <View style={{backgroundColor: this.props.theme.bgColorItem, flexDirection:'row',
                            justifyContent:'center', paddingVertical: 10, borderBottomWidth:StyleSheet.hairlineWidth, borderBottomColor: this.props.theme.borderColor,
                            borderRightWidth: 2, borderRightColor: item.type === 2 ? '#48B14A' : '#B14848'}}>
                            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{color: this.props.theme.textActive, fontSize: 12}}>{item.day}</Text>
                                <Text style={{color: this.props.theme.textActive, fontSize: 12}}>{item.date}</Text>
                            </View>
                            <View style={{flex: 3, flexDirection:'row'}}>
                                <View style={{justifyContent:'center'}}>
                                    <Image
                                        style={{width: 20, height: 40, resizeMode:'contain'}}
                                        source={item.iconType === 0 ? this.props.theme.icon.CashIn :
                                            (item.iconType === 1 ? this.props.theme.icon.Shoping : this.props.theme.icon.InvoicePayment)}
                                    />
                                </View>
                                <View style={{paddingLeft: 8, paddingRight: 12, justifyContent:'center'}}>
                                    <Text style={{color: this.props.theme.textBold, fontSize: 15}}>{item.type === 1 ? '-' : '+'}{item.money}đ</Text>
                                    <Text style={{color: this.props.theme.textActive, fontSize: 12}}>{item.des}</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                                <Ionicons name= {item.status ? 'ios-checkmark-outline' : 'ios-close-outline'} style={{color: this.props.theme.textActive, fontSize: 32}}/>
                                <Text style={{color: this.props.theme.textActive, fontSize: 11, marginTop: -8}}>{item.status ? 'Thành công' : 'Thất bại'}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styleHistory = StyleSheet.create({
    tab:{
        flexDirection:'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5
    }

});

function mapStateToProps(state) {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps, actionCreator)(History);