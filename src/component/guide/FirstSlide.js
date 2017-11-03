import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { setItem } from '../../function/AsyncStorage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class FirstSlide extends Component<{}> {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = { age: 18 }
    }

    finish(){
        setItem('isShowSlide', 'false', 'TEXT').then(()=>{
            this.props.navigation.navigate('Login');
        });
    }

    render() {
        return (
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                loop={false}
                activeDotColor="#fff"
                // buttonWrapperStyle={{alignItems:'flex-start'}}
                nextButton={<Icon name="arrow-right" size={30} color="#fff" />}
                prevButton={<Icon name="arrow-left" size={30} color="#fff" />}
                // scrollEnabled={ false }
            >
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../../assets/image/intro.jpg')}/>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                    <TouchableOpacity onPress={()=> this.finish()}>
                        <Text style={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#9DD6EB',
        // alignItems: 'stretch'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image:{
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        width,
        height
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonText:{
        padding: 10,
        backgroundColor: '#28ABE3',
        color: '#fff',
        fontSize: 20,
        marginVertical: 10,
        textAlign:'center'
    }
});