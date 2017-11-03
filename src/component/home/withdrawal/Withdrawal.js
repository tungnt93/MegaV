import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../../redux/actionCreators';

import { getItem } from '../../../function/AsyncStorage';
import styles from '../../../assets/style/Style';

class Withdrawal extends Component<{}> {
    // static navigationOptions = {
    //     header: null
    // };

    constructor(props){
        super(props);
        this.state = {

        }
        this.arrItem = [

        ];
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
                        <Image style={styles.logo} source={require('../../../assets/image/logo.png')}/>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Nạp tiền</Text>
                </View>
                <View>

                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        showGuide: state.showGuide
    }
}

export default connect(mapStateToProps, actionCreator)(Withdrawal);