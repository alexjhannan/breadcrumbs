import firebase from 'firebase';
import GLOBAL_CONFIG from '~/config.js';

const config = {
  apiKey: GLOBAL_CONFIG.firebaseAPIKey,
  authDomain: GLOBAL_CONFIG.firebaseAuthDomain,
  databaseURL: GLOBAL_CONFIG.firebaseDatabaseURL
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
