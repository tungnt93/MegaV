import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';

import { getItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';
import GuideTopup from './topup/GuideTopup';
import GuideWithdrawal from './withdrawal/GuideWithdrawal';
import GuideTransfers from './transfers/GuideTransfers';

class ItemImage extends Component<{}>{
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
                <Image style={styleItem.item} source={this.props.item.img}>
                    <View style={{flex: 2}}>
                        {this.props.item.intro ?
                            <View>
                                <TouchableOpacity onPress={this.showGuide.bind(this)}>
                                    <Text style={styleItem.introItem}>
                                        Hướng dẫn <Icon name='arrow-right' style={{marginLeft: 15}}/>
                                    </Text>
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
                    <Text style={styleItem.textItem}>{this.props.item.name.toUpperCase()}</Text>
                </Image>
            </TouchableOpacity>
        )
    }
}

const styleItem = StyleSheet.create({
    item:{
        width: 160,
        height: 120,
        // resizeMode: 'contain',
        margin: 6
    },
    textItem:{
        flex: 1,
        color: '#fff',
        fontSize: 18,
        fontWeight:'bold',
        paddingLeft: 10
    },
    introItem:{
        backgroundColor: '#fed700',
        color:'#000',
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        margin: 10,
        width: 135,
        textAlign:'center'
    }
});

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide
    }
}

export default connect(mapStateToProps, actionCreator)(ItemImage);