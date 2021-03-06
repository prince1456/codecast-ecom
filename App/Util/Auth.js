import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyAD2hsZfCBl50JDoa5aC854F8dpGTwNfT8",
  authDomain: "codecast-a925a.firebaseapp.com",
  databaseURL: "https://codecast-a925a.firebaseio.com",
  projectId: "codecast-a925a",
  storageBucket: "codecast-a925a.appspot.com",
  messagingSenderId: "158706587014",
  appId: "1:158706587014:web:ff8e74ef737573cfa0c807",
  measurementId: "G-TX6R318PPC"
};
class FirebaseApp {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  register = async ({ email, password, name }) => {
    const { user } = await this.auth.createUserWithEmailAndPassword(email, password);
    console.log(user.uid)
    await this.db.collection('Users').doc(user.uid).set({name: name})
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  };
  login = async ({email, password}) => {
      console.log(email, password)
      await this.auth.signInWithEmailAndPassword(email, password)
      return this.auth.currentUser;
  }
  logout = () => {
    this.auth.signOut();
  };
  saveUserInfo = async (values) => {
      const uid = this.auth.currentUser.uid
      console.log(uid)
      await this.db.collection('Users').doc(uid).set(values)
  }
  getFirstName = async () => {
    const uid = this.auth.currentUser.uid
      const doc = await this.db.collection('Users').doc(uid).get()
      return doc.data()
  }
}

export default new FirebaseApp();















