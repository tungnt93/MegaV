import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, CheckBox, Modal,
    TouchableHighlight, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { getItem } from '../../function/AsyncStorage';
import { connect } from 'react-redux';
import styles from '../../assets/style/Style';

class List extends Component<{}>{
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', marginLeft: 15}}>
                    <Text style={registerStyle.listNumber}>{this.props.number}.</Text>
                    <View style={{flex: 19}}>
                        <Text style={registerStyle.listText}>{this.props.text}</Text>
                        {this.props.subText ?
                            this.props.subText.map((e, i)=>{
                                return(
                                    <View key={i} style={{flexDirection: 'row'}}>
                                        <Text style={registerStyle.subTextLi}>-</Text>
                                        <Text style={registerStyle.subText}>{e}</Text>
                                    </View>

                                )})
                            : null}
                    </View>
                </View>
            </View>
        )
    }
}

class Policy extends Component<{}>{
    render(){
        return(
            <View>
                <Text style={registerStyle.titlePolicy}>ĐIỀU 1. CÁC QUYỀN RIÊNG TƯ CỦA NGƯỜI SỬ DỤNG</Text>
                <List number={1} text="Chính sách quyền riêng tư nhằm mô tả các quyền riêng tư của người sử dụng liên quan đến việc EPAY thu thập, xử lý, sử dụng, lưu trữ, chia sẻ và bảo vệ thông tin cá nhân của Khách hàng khi sử dụng MegaV."/>
                <List number={2} text="Thông tin cá nhân được hiểu là thông tin người sử dụng và tất các các thông tin khác liên quan đến Người sử dụng, được EPAY thu thập, nghi nhận, xử lý, sử dụng, lưu trữ, chia sẻ trong quá trình Người sử dụng truy cập và sử dụng MegaV. Thuật ngữ “Thông tin cá nhân” được sử dụng theo Chính sách này là một và được dùng cho cả người sử dụng là cá nhân và tổ chức."/>
                <List number={3} text="Chính sách Quyền riêng tư nhằm áp dụng cho MegaV và tất cả các phương tiện, công cụ, ứng dụng, dịch vụ liên quan đến việc cung ứng MegaV, bất kể khách hàng sử dụng phương thức nào để truy cập hoặc sử dụng."/>
                <List number={4} text="Khách hàng được mặc định là đồng ý và chấp nhận chính sách quyền riêng tư khi khách hàng đăng ký để truy cập và sử dụng MegaV. Đây là chính sách điều chỉnh việc sử dụng MegaV của người sử dụng trừ trường hợp có thỏa thuận cụ thể khác."/>
                <List number={5} text="EPAY có thể điểu chỉnh Chính sách quyền riêng tư này vào bất kỳ thời điểm nào thông qua việc đăng tải chính sách được điều chỉnh trên website của EPAY. Bản điều chỉnh có hiệu lực kể từ thời điểm được đăng tải."/>

                <Text style={registerStyle.titlePolicy}>ĐIỀU 2. THU THẬP THÔNG TIN</Text>
                <List number={1} text="Để phục vụ cho việc cung ứng dịch vụ MegaV, phân tích thông tin phục vụ việc bảo mật và giữ an toàn cho hệ thống, tạo cơ sở xác thực thông tin, chăm sóc khách hàng, cải thiện dịch vụ, EPAY được quyền thu thập các loại thông tin cá nhân từ các nguồn khác nhau khi Khách hàng sử dụng MegaV."/>
                <List
                    number={2}
                    text="Thông tin được thu thập tự động:"
                    subText = {[
                        "Khi Khách hàng sử dụng MegaV, EPAY thu thập những thông tin được gửi đến EPAY từ máy tính, điện thoại của Khách hàng hoặc các thiết bị được Khách hàng sử dụng để truy cập. Các thông tin này, bao gồm nhưng không giới hạn, các nội dung sau: Dữ liệu về các trang Khách hàng truy cập, địa chỉ IP của máy tính, ID nhận dạng thiết bị, loại thiết bị, thông tin máy tính và thiết bị mạng, số liệu thống kê kiểm thị của trang truy cập và các dữ liệu cơ bản khác.",
                        "Khi bạn truy cập và sử dụng MegaV, chúng tôi (hoặc các công cụ theo dõi hoặc thống kê hoạt động của website do đối tác cung cấp) sẽ đặt một số cơ sở dữ liệu gọi chung là Cookies (thông qua chương trình định vị người dùng; những chương trình/trình duyệt ứng dụng tương tự khác như: fflash, cookies, pixcel tags…) lên máy tính hoặc các thiết bị của Khách hàng. Một trong số những Cookies này có thể tồn tại lâu để thuận tiện cho Khách hàng trong quá trình sử dụng, ví dụ như: Lưu email của khách hàng trong trang đăng nhập để bạn không phải nhập lại…",
                        "EPAY sử dụng những công nghệ nói trên với mục đích nhận diện Khách hàng như một Người sử dụng của EPAY; phục vụ cho việc đáp ứng dịch vụ MegaV, nội dung và quảng cáo tương ứng cho từng đối tượng khách hàng khác nhau; đo lường hiệu ứng tiếp thị, quảng cáo; hỗ trợ đảm bảo an ninh, bảo mật tài khoản của khách hàng; hạn chế rủi ro và ngăn ngừa gian lận; nâng cao độ tin cậy và an toàn trong hoạt động kết nối giữa khách hàng và EPAY.",
                        "Bạn có quyền từ chối nhận những Cookies này nếu những trình duyệt của khách hàng có chức năng từ chối đó, trừ khi các Cookies được EPAY dùng để ngăn chặn gian lận và đảm bảo an toán đối với các website của EPAY và dịch vụ MegaV."
                    ]}
                />
                <List number={2} text=""/>
            </View>
        )
    }
};

class Term extends Component<{}>{
    render(){
        return(
            <View>
                <Text>Chinh sach quyen rieng tu</Text>
            </View>
        )
    }
};

class ModalPolicy extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            modalVisible: props.modalVisible
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            modalVisible: nextProps.modalVisible
        })
    }

    render(){
        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {}}
            >
                <View style={{flex:1, backgroundColor: '#fff'}}>
                    <View style={styles.titleModal}>
                        <Text style={styles.textTitleModal}>{this.props.title}</Text>
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={() => {this.setState({modalVisible: false})}}>
                            <Ionicons name="ios-close" size={40} style={{color:'#fff',textAlign:'right'}}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{margin: 16}}>
                        {this.props.content}
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}

class Register extends Component<{}> {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            name: '',
            password: '',
            rePassword: '',
            checkbox: false,
            showPolicy: false,
            showTerm: false,
            showPass: false,
            showRePass: false
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                <Image source={require('../../assets/image/bg-light.jpg')} style={[styles.bgImg]}/>
                <View style={{backgroundColor: this.props.theme.bgOpacity, paddingTop: 38, flex: 1}}>
                    <ScrollView>
                        <View style={{alignItems:'center'}}>
                            <View style={{marginTop: 30}}>
                                <Image style={styles.logo_black} source={require('../../assets/image/logo_black.png')}/>
                            </View>
                            <View style={{marginTop: 30}}>
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                    placeholder = "Số điện thoại"
                                    onChangeText={(phone) => this.setState({phone})} value={this.state.phone}
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.refs['2'].focus()}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                    placeholder = "Tên đầy đủ"
                                    onChangeText={(name) => this.setState({name})} value={this.state.name}
                                    ref="2"
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.refs['3'].focus()}
                                />
                                <View style={{position:'relative'}}>
                                    <TextInput
                                        style={styles.textInput}
                                        underlineColorAndroid='transparent'
                                        placeholder = "Mật khẩu"
                                        secureTextEntry={!this.state.showPass}
                                        onChangeText={(password) => this.setState({password})} value={this.state.password}
                                        ref="3"
                                        returnKeyType='next'
                                        onSubmitEditing={() => this.refs['4'].focus()}
                                    />
                                    <TouchableOpacity
                                        style={{position:'absolute', top: 0, right: 0, padding: 10}}
                                        onPress={()=>this.setState({showPass: !this.state.showPass})}>
                                        <Ionicons name= {this.state.showPass ? 'ios-eye-off-outline': 'ios-eye-outline'}
                                                  style={{fontSize: 32, color:'#333'}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{position:'relative'}}>
                                    <TextInput
                                        style={styles.textInput}
                                        underlineColorAndroid='transparent'
                                        placeholder = "Nhập lại mật khẩu"
                                        secureTextEntry={!this.state.showRePass}
                                        onChangeText={(rePassword) => this.setState({rePassword})} value={this.state.rePassword}
                                        ref="4"
                                        returnKeyType = 'go'
                                    />
                                    <TouchableOpacity
                                        style={{position:'absolute', top: 0, right: 0, padding: 10}}
                                        onPress={()=>this.setState({showRePass: !this.state.showRePass})}>
                                        <Ionicons name= {this.state.showRePass ? 'ios-eye-off-outline': 'ios-eye-outline'}
                                                  style={{fontSize: 32, color:'#333'}}/>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection:'row', marginVertical: 20}}>
                                    <TouchableOpacity onPress={()=>this.setState({checkbox: !this.state.checkbox})}>
                                        <Ionicons name= {this.state.checkbox ? 'ios-checkbox-outline' : 'ios-square-outline'}
                                                  style={{color: '#fff', fontSize: 24, paddingRight: 8, paddingBottom: 8}}/>
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap'}}>
                                        <Text style={styles.text}>Tôi đã đọc, hiểu rõ và đồng ý với</Text>
                                        <TouchableOpacity onPress={()=> this.setState({showTerm: true, showPolicy: false})}>
                                            <Text style={styles.link}> Thỏa thuận người sử dụng</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.text}> và </Text>
                                        <TouchableOpacity onPress={()=> this.setState({showPolicy: true, showTerm: false})}>
                                            <Text style={styles.link}> Chính sách quyền riêng tư </Text>
                                        </TouchableOpacity>
                                        <Text style={styles.text}> của MegaV</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{marginTop: 10}}>
                                    <Text style={[styles.buttonText, {backgroundColor: this.props.theme.bgButton}]}>ĐĂNG KÝ</Text>
                                </TouchableOpacity>
                            </View>
                            <ModalPolicy modalVisible={this.state.showTerm} title="Thỏa thuận người sử dụng" content={<Term/>}/>
                            <ModalPolicy modalVisible={this.state.showPolicy} title="Chính sách quyền riêng tư" content={<Policy/>}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const registerStyle = StyleSheet.create({
    titlePolicy:{
        fontSize: 16,
        color: '#333',
        fontWeight:'bold'
    },
    contentPolicy:{
        fontSize: 14,
        color: '#333'
    },
    listNumber:{
        fontSize: 16,
        color: '#333',
        flex: 1,
        lineHeight: 25,
    },
    listText:{
        fontSize: 16,
        color: '#333',
        flex: 19,
        lineHeight: 25,
    },
    subText:{
        fontSize: 16,
        color: '#333',
        flex: 19,
        lineHeight: 25,
    },
    subTextLi:{
        fontSize: 16,
        color: '#333',
        flex: 1,
        lineHeight: 25,
    }
});

function mapStateToProps(state) {
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Register);