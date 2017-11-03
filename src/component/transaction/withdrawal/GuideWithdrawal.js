import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../../../redux/actionCreators';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from '../../../assets/style/Style';

class GuideWithdrawal extends Component<{}> {
    constructor(props){
        super(props);
        this.state = { age: 18 }
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <View style={styles.titleModal}>
                    <Text style={styles.textTitleModal}>Hướng dẫn rút tiền</Text>
                    <TouchableOpacity
                        style={{flex: 1, justifyContent:'center'}}
                        onPress={()=>this.props.actionShowGuide('hide')}>
                        <Ionicons name="ios-close" size={40} style={{color:'#fff',textAlign:'right'}}/>
                    </TouchableOpacity>
                </View>
                <View style={{margin: 8, flex: 1, backgroundColor:'#fff'}}>
                    <Swiper
                        style={styles.wrapper}
                        showsButtons={true}
                        loop={false}
                        activeDotColor="#fff"
                        buttonWrapperStyle={{alignItems:'flex-end', marginTop: 10}}
                        nextButton={<Text style={styles.buttonText}>Tiếp theo</Text>}
                        prevButton={<Text style={styles.buttonText}>Trước</Text>}
                        // scrollEnabled={ false }
                    >
                        <View style={styles.slide}>
                            <Image style={styles.imageGuide} source={require('../../../assets/image/guide/wd1.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.imageGuide} source={require('../../../assets/image/guide/wd2.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.imageGuide} source={require('../../../assets/image/guide/wd3.png')}/>
                        </View>
                    </Swiper>
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

export default connect(mapStateToProps, actionCreator)(GuideWithdrawal);