import { StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import store from '../../redux/store';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        padding: 16,
        paddingTop: 30
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#444',
        // padding: 16,
        // paddingTop: 30

    },
    bgImg:{
        height,
        width,
        resizeMode: 'cover',
        position:'absolute'
    },
    buttonText:{
        padding: 10,
        backgroundColor: '#48b14a',
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        textAlign:'center',
        lineHeight: 25,
        borderRadius: 30,
        height: 50,
        width: 280,
        fontFamily: "OpenSans-Light",
    },
    buttonText2:{
        padding: 10,
        // color: '#48b14a',
        color: '#fff',
        fontSize: 16,
        textAlign:'center',
        borderRadius: 5,
        fontFamily: "OpenSans-Light",
    },
    buttonText3:{
        padding: 10,
        backgroundColor: '#aaa',
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        textAlign:'center',
        borderRadius: 5,
        fontFamily: "OpenSans-Light",
    },
    buttonTextFull:{
        padding: 10,
        backgroundColor: '#48b14a',
        color: '#fff',
        fontSize: 16,
        textAlign:'center',
        borderRadius: 5,
        fontFamily: "OpenSans-Light",
    },
    btnRegister:{
        padding: 10,
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        textAlign:'center',
        lineHeight: 25,
        borderRadius: 30,
        height: 50,
        borderColor:'#fff',
        borderWidth:1,
        width: 280,
        fontFamily: "OpenSans-Light",
    },
    textInput:{
        fontSize: 16,
        backgroundColor:'#fff',
        borderRadius: 30,
        marginVertical: 5,
        height: 45,
        textAlign:'center',
        width: 280,
        paddingHorizontal: 45,
        fontFamily: "OpenSans-Light",
    },
    logo_black:{
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },
    logo:{
        width: 80,
        height: 55,
        resizeMode: 'contain',
    },
    text:{
        fontSize: 14,
        color:'#fff',
        fontFamily: "OpenSans-Light",
    },
    textCenter:{
        textAlign:'center'
    },
    link:{
        fontSize: 14,
        color:'#337ab7',
        fontFamily: "OpenSans-Light",
    },
    title:{
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingBottom: 10,
        marginTop: 15,
    },
    textTitle:{
        color:'#fff',
        fontSize: 16,
        borderLeftWidth: 3,
        borderLeftColor: '#48b14a',
        paddingLeft: 10,
        fontFamily: "OpenSans-Light",
    },
    titleModal:{
        flexDirection:'row', backgroundColor: '#48b14a', paddingHorizontal: 15, paddingVertical:8,
        justifyContent:'center', height: 50
    },
    textTitleModal:{
        fontSize: 18, color:'#fff', flex: 5, fontFamily: "OpenSans-Light",
    },
    slide:{
        flex: 1,
        alignItems: 'center'
    },
    imageGuide:{
        width: width - 50,
        height: height - 185,
        resizeMode: 'contain'
    },
    textWhite:{
        color: '#fff',
    },
    textLink:{
        color: '#2C80AD'
    },
    textBold:{
        // fontWeight: 'bold'
        fontFamily: "OpenSans-Bold",
    },
    textMenu:{
        color: '#bdbdbd',
    },
    textGreen:{
        color: '#48b14a',
    },
    textSmall:{
        fontSize: 12,
        fontFamily: "OpenSans-Light",
    },
    textNormal:{
        fontSize: 14,
        fontFamily: "OpenSans-Regular",
    },
    textLarge:{
        fontSize: 18,
        fontFamily: "OpenSans-Light",
    },
    textBig:{
        fontSize: 20,
        fontFamily: "OpenSans-Light",
    },
    textLight:{
        fontFamily: "OpenSans-Light",
    },
    textWrap:{
        flexWrap: 'wrap'
    },
    tabbar:{
        backgroundColor:'#444'
    },
    row:{
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center'
    },
    rowIcon:{
        flex: 1.2,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    rowView:{
        flex: 6,
        justifyContent:'center'
    },
    rowRight: {
        flex: 3,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    noBorder:{
        borderWidth: 0
    }
});

export default (styles);