import firebase from 'firebase';
import CONFIG from '../config';

const config = {
  apiKey: CONFIG.firebaseAPIKey,
  authDomain: CONFIG.firebaseAuthDomain,
  databaseURL: CONFIG.firebaseDatabaseURL
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
