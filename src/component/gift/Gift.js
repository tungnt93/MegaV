import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, ScrollView, StatusBar, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Image from 'react-native-image-progress';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';
import styles from '../../assets/style/Style';
import Header from '../Header';
const width = Dimensions.get('window').width;

class Gift extends Component<{}>{
    constructor(props){
        super(props);
        this.promotions = [
            {key: 1, img: 'https://megav.vn/images/bg-login.png',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 10%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
            {key: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKF1jj7wioJ4vIF-I-wySqpwCLZyBTJsI8-eMDqefnGTraVTVcHg',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 20%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
            {key: 3, img: 'https://ae01.alicdn.com/kf/HTB1c6dqJFXXXXcNXpXXq6xXFXXXz/223715940/HTB1c6dqJFXXXXcNXpXXq6xXFXXXz.jpg',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 30%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
            {key: 4, img: 'https://megav.vn/images/bg-login.png',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 40%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
            {key: 5, img: 'https://c1.staticflickr.com/9/8056/8124586620_3a003f4bec_b.jpg',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 50%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
            {key: 6, img: 'http://www.webpage-maker.com/guide/files/200821911435669_2.jpg',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 60%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
            {key: 7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAD2iUp5Kkl2tGiSDwvd1cVIn3riuvtmghG6AKQHCPTk9oYiHw',
                title: 'Mở bán thẻ Data MobiFone, xả láng dùng 3G với chiết khấu cực đã 70%', des:'Tặng dung lượng 3G thoải mái',
                start:'30/10/2017', end:'30/11/2017'},
        ];
        this.state = {
            promotions: this.promotions,
            startswiper:false,
        }
        this.slides = [
            {key: 1, link: 'https://megav.vn/images/bg-login.png'},
            {key: 2, link: 'https://megav.vn/images/bg-login.png'},
            {key: 3, link: 'https://megav.vn/images/bg-login.png'},
            {key: 4, link: 'https://megav.vn/images/bg-login.png'},
        ];
        console.log('Gift load');
    }

    componentWillMount(){
        setTimeout(() => {this.setState({startswiper:true})}, 10);
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                <Header title='Khuyến mãi'/>
                <View style={{height: width/2, backgroundColor:'green'}}>
                    {this.state.startswiper ?
                        <Swiper
                            style={styleGift.wrapper}
                            showsButtons={true}
                            autoplay={true}
                            activeDotColor="#fff"

                        >
                            <View style={styleGift.slide1}>
                                <Image style={styleGift.image} source={{uri: this.promotions[5].img}}/>
                            </View>
                            <View style={styleGift.slide2}>
                                <Image style={styleGift.image} source={{uri: this.promotions[6].img}}/>
                            </View>
                            <View style={styleGift.slide3}>
                                <Image style={styleGift.image} source={{uri: this.promotions[1].img}}/>
                            </View>
                        </Swiper>
                        : null}

                </View>
                <View style={{flexDirection:'row', padding: 10}}>
                    <View style={{justifyContent:'center'}}>
                        <Image
                            style={{width: 18, height: 18, resizeMode:'contain'}}
                            source={this.props.theme.icon.TimeDeal}
                        />
                    </View>
                    <Text style={{color: this.props.theme.textActive, fontSize: 14, marginLeft: 5}}>Chương trình áp dụng đến hết 31/12/2017</Text>
                </View>
                <FlatList
                    style={{backgroundColor: this.props.theme.bgColor}}
                    data={this.promotions}
                    keyExtractor={(item, index) => index}
                    renderItem = {({item})=>
                        <View style={{backgroundColor: this.props.theme.bgColorItem, flexDirection:'row',
                            padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: this.props.theme.borderColor}}>
                            <Image style={{width: 90, height: 60}} source={{uri: item.img}}/>
                            <View style={{paddingLeft:10, flex: 1}}>
                                <Text style={{color: this.props.theme.textBold, fontSize: 14}}>{item.title}</Text>
                                <Text style={{color: this.props.theme.textActive, fontSize: 12}}>{item.des}</Text>
                            </View>
                        </View>
                    }
                />
                {/*<ScrollView>*/}
                    {/*{this.state.promotions.map(item=>{*/}
                        {/*return this.itemPromotion(item);*/}
                    {/*})}*/}
                {/*</ScrollView>*/}
            </View>
        )
    }

    itemPromotion(item){
        return(
            <View
                key={item.key}
                style={{backgroundColor: this.props.theme.bgColorItem, flexDirection:'row',
                padding: 10, borderBottomWidth:0.7, borderBottomColor: this.props.theme.borderColor}}>
                <Image
                    style={{width: 90, height: 60}}
                    source={{uri: item.img}}
                    renderError={(error) => console.log(error)}
                />

                <View style={{paddingLeft:10, flex: 1}}>
                    <Text style={{color: this.props.theme.textBold, fontSize: 14}}>{item.title}</Text>
                    <Text style={{color: this.props.theme.textActive, fontSize: 12}}>{item.des}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="calendar" style={[{color: this.props.theme.textNotActive}, styles.textSmall]}/>
                        <Text style={[{color: this.props.theme.textNotActive, marginLeft: 5}, styles.textSmall]}>{item.start} - {item.end}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styleGift = StyleSheet.create({
    slideImg:{
        width: 300,
    },
    image:{
        width,
        height: width/2
    },
    wrapper: {
        flex: 1
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
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
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

function mapStateToProps(state) {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps, actionCreator)(Gift);