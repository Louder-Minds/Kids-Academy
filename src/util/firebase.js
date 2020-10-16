import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCwcgoiRAyowya-dTOY8_Rctb9T_o5a6Lw',
    authDomain: 'kidsacademy-22dd7.firebaseapp.com',
    databaseURL: 'https://kidsacademy-22dd7.firebaseio.com',
    projectId: 'kidsacademy-22dd7',
    storageBucket: 'kidsacademy-22dd7.appspot.com',
    messagingSenderId: '881900472363',
    appId: '1:881900472363:web:8fe08502a495240f02026e',
    measurementId: 'G-FX4P5XBY2K',
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
