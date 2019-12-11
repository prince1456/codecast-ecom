import * as firebase from 'firebase';

class Firebase {
    static initialize() {
        firebase.initializeApp({
            apiKey: "AIzaSyAD2hsZfCBl50JDoa5aC854F8dpGTwNfT8",
            authDomain: "codecast-a925a.firebaseapp.com",
            databaseURL: "https://codecast-a925a.firebaseio.com",
            projectId: "codecast-a925a",
            storageBucket: "codecast-a925a.appspot.com",
            messagingSenderId: "158706587014",
            appId: "1:158706587014:web:ff8e74ef737573cfa0c807",
            measurementId: "G-TX6R318PPC"
          });
    }
}

export default Firebase;