import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, StatusBar, AppState, View, TouchableOpacity} from 'react-native';
import Fingerprint from 'react-native-fingerprint-android';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class TouchIDAndroid extends Component {
    static PHASE_NORMAL = 'rgba(62, 130, 247, 1)';
    static PHASE_WARN = 'rgba(255, 241, 118, 1)';
    static PHASE_FAIL = 'rgba(239, 83, 80, 1)';
    static PHASE_SUCCESS = 'rgba(38, 166, 154, 1)';

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            phase: 'normal',
            message: '',
            cancelled: false
        }
    }

    componentDidMount() {
        this.authenticate();

        AppState.addEventListener("change", async(state) => {
            try {
                if(state === "active" && await Fingerprint.isAuthenticationCanceled()) {
                    this.authenticate()
                }
            }
            catch(z) {
                console.error(z)
            }
        })
    }

    // state = {
    //     phase: 'normal',
    //     message: '',
    //     cancelled: false
    //
    // }

    async componentWillUnmount() {
        try {
            if(!Fingerprint.isAuthenticationCanceled()) {
                //stop listening to authentication.
                await Fingerprint.cancelAuthentication();
            }
        } catch(z) {
            console.error(z);
        }
    }

    async authenticate() {
        this.setState({
            phase: 'normal',
            message: ''
        })

        try {
            // do sanity checks before starting authentication flow.
            // HIGHLY recommended in real life usage. see more on why you should do this in the readme.md
            const hardware = await Fingerprint.isHardwareDetected();
            const permission = await Fingerprint.hasPermission();
            const enrolled = await Fingerprint.hasEnrolledFingerprints();

            if (!hardware || !permission || !enrolled) {
                let message = !enrolled ? 'Không có dấu vân tay nào được đăng ký trên thiết bị của bạn!' : !hardware ? 'Thiết bị không được hỗ trợ!' : 'Ứng dụng không được cấp quyền'
                this.setState({
                    phase: 'fail',
                    message
                });
                return;
            }

            await Fingerprint.authenticate(warning => {
                this.setState({
                    phase: 'warn',
                    message: warning.message
                })
            });

            // if we got this far, it means the authentication succeeded.
            this.setState({
                phase: 'success',
                message: ''
            });

            // in real life, we'd probably do something here (process the payment, unlock the vault, whatever)
            // but this is a demo. so restart authentication.
            setTimeout(() => this.authenticate(), 3000);

        } catch (error) {
            if(error.code == Fingerprint.FINGERPRINT_ERROR_CANCELED) {
                // we don't show this error to the user.
                // we will check if the auth was cancelled & restart the flow when the appstate becomes active again.
                return;
            }
            this.setState({
                phase: 'fail',
                message: error.message
            })
        }
    }

    getPhaseColor(): string {
        return TouchIDAndroid['PHASE_'+this.state.phase.toUpperCase()];
    }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent={true}/>
                <View duration={1000} transition="backgroundColor"
                      style={[styles.container, {backgroundColor: this.getPhaseColor()}]}>
                    <TouchableOpacity style={styles.close} onPress={()=> this.props.navigation.goBack()}>
                        <Text style={{fontSize: 18, color: '#fff'}}>Đóng</Text>
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <IonIcon name="md-finger-print" size={60} color = {this.getPhaseColor()}/>
                    </View>

                    <Text style={styles.welcome}>
                        {this.state.phase === 'normal' && 'Chạm vào cảm biến vân tay trên thiết bị!'}
                        {this.state.phase === 'warn' && 'Thử lại!'}
                        {this.state.phase === 'fail' && 'Xác thực không thành công!'}
                        {this.state.phase === 'success' && 'Xác thực thành công!'}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.message}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 30,
    },
    welcome: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
        margin: 10,
        marginTop: 20
    },
    text:{
        color: '#fff',
        fontSize: 16
    },
    icon: {
        borderRadius: 100,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        elevation: 5
    },
    close:{
        position: 'absolute',
        top: 30,
        left: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        // backgroundColor: 'blue'
    }
});