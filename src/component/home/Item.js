import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal,
    Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';

import { getItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';
import GuideTopup from './cashIn/GuideCashIn';
import GuideWithdrawal from './withdrawal/GuideWithdrawal';
import GuideTransfers from './transfers/GuideTransfers';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Item extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            // showGuideTopup: false,
            // showGuideWithdrawal: false,
            // showGuideTransfers: false,
        };
        console.log(this.props.showGuide);
        console.log(this.props.item);
    }

    showGuide(){
        if(this.props.item.key === 1){
            this.props.actionShowGuide('showGuideTopup');
        }
        else if(this.props.item.key === 2){
            this.props.actionShowGuide('showGuideWithdrawal');
        }
        else if(this.props.item.key === 3){
            this.props.actionShowGuide('showGuideTransfers');
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate(this.props.item.navigator)}}>
                <View style={[
                    styleItem.item, {backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor},
                    this.props.item.key % 3 === 2 ? {borderRightWidth: StyleSheet.hairlineWidth, borderLeftWidth: StyleSheet.hairlineWidth}: null
                ]}>
                    <View style={{flex: 1}}>
                        {this.props.item.intro ?
                            <View>
                                <TouchableOpacity onPress={this.showGuide.bind(this)} style={{position: 'absolute',
                                    right: 0,
                                    top: 0}}>
                                    <Icon name='question' style={styleItem.introItem}/>
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={
                                        this.props.item.key === 1 ? this.props.showGuide.showGuideTopup :
                                            (this.props.item.key === 2 ? this.props.showGuide.showGuideWithdrawal :
                                                this.props.showGuide.showGuideTransfers)
                                    }
                                    onRequestClose={() => {alert("Modal has been closed.")}}
                                >
                                    <View style={{padding: 15, flex: 1}}>
                                        {this.props.item.intro}
                                    </View>
                                </Modal>
                            </View>
                            : null}
                    </View>
                    <View style={{flex: 7, alignItems:'center', justifyContent:'center'}}>
                        <View style={{flex: 1, justifyContent:'flex-end'}}>
                            <View style={{justifyContent:'center'}}>
                                <Image
                                    style={{width: 36, height: 36, resizeMode:'contain'}}
                                    source={
                                        this.props.item.key === 1 ? this.props.theme.icon.CashIn :(
                                        this.props.item.key === 2 ? this.props.theme.icon.CashOut : (
                                        this.props.item.key === 3 ? this.props.theme.icon.TransferMoney : (
                                        this.props.item.key === 4 ? this.props.theme.icon.Location : (
                                        this.props.item.key === 5 ? this.props.theme.icon.ConnectBank : (
                                        this.props.item.key === 6 ? this.props.theme.icon.Phone : (
                                        this.props.item.key === 7 ? this.props.theme.icon.InvoicePayment : (
                                        this.props.item.key === 8 ? this.props.theme.icon.ServicePayment :
                                        this.props.theme.icon.Shopping))))))
                                    )}
                                />
                            </View>
                        </View>
                        <View style={{flex: 1, justifyContent:'flex-start'}}>
                            <Text style={[styles.textNormal, {paddingHorizontal: 10, color: this.props.theme.textColor, textAlign:'center'}]}>{this.props.item.name}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styleItem = StyleSheet.create({
    item:{
        width: width/3,
        height: width/3,
        // resizeMode: 'contain',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textItem:{
        fontSize: 18
    },
    introItem:{
        // backgroundColor: '#fed700',
        color:'#fed700',
        fontSize: 25,
        padding: 5,
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 0,
        textAlign:'right',
    }
});

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide,
        theme: state.theme
    }
}

export default connect(mapStateToProps, actionCreator)(Item);