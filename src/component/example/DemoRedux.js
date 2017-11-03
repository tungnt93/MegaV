import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid as Toast, AppState } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';
// import TouchID from 'react-native-touch-id';
import TouchID from './TouchIDAndroid';
import Fingerprint from 'react-native-fingerprint-android';

class DemoRedux extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            showTouchID: false,
            message:'abc',
            phase: 'normal',
        }
    }

    authenStart(){
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
                let message = !enrolled ? 'No fingerprints registered.' : !hardware ? 'This device doesn\'t support fingerprint scanning.' : 'App has no permission.'
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

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> this.authenStart.bind(this)}>
                        <Text style={styles.button}>Show Touch ID</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={()=>this.props.decrement()}>
                        <Text style={styles.button}>-</Text>
                    </TouchableOpacity>
                    <Text style={{flex: 1, textAlign:'center', fontSize: 32}}>{this.props.value}</Text>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={()=>this.props.increment()}>
                        <Text style={styles.button}>+</Text>
                    </TouchableOpacity>

                </View>

                    <View style={styles.viewTouchIdWrap}>
                        <View style={styles.touchId}>
                            <Text>
                                {this.state.message}
                            </Text>
                        </View>
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
        flexDirection: 'row'
    },
    button:{
        fontSize: 30,
        color:'#000',
        backgroundColor:'gray',
        padding: 20
    },

    viewTouchIdWrap:{
        backgroundColor:'rgba(0,0,0,0.5)',
        flex: 1,
        // position: 'absolute',
        zIndex: 100
    },
    touchId:{
        flex: 1,
        margin: 32,
        backgroundColor: '#fff'
    }
});

function mapStateToProps(state) {
    return {
        value: state.changeValue
    }
}

export default connect(mapStateToProps, actionCreator)(DemoRedux);