import firebase from 'firebase';

export default function watchAuthentication () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log('logged in!');
      console.log('logged in!');
      console.log('logged in!');
      console.log('logged in!');
    } else {
      console.log('not logged in!');
      console.log('not logged in!');
      console.log('not logged in!');
      console.log('not logged in!');
    }
  });
};
