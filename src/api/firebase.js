import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCb65WQeQ1Y4MXsTQudTHIz5e9gOcmWWck",
    authDomain: "fir-firebase-react-native.firebaseapp.com",
    databaseURL: "https://fir-firebase-react-native.firebaseio.com",
    projectId: "fir-firebase-react-native",
    storageBucket: "",
    messagingSenderId: "876015673150"
};

export const firebaseConfig = firebase.initializeApp(config);