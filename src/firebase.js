import * as firebase from 'firebase';



  var config = {
    apiKey: "AIzaSyDwy3EUMGkpvY5RVaf8mrJ1SUcaNfDnjyA",
    authDomain: "goalcoach-a742a.firebaseapp.com",
    databaseURL: "https://goalcoach-a742a.firebaseio.com",
    projectId: "goalcoach-a742a",
    storageBucket: "",
    messagingSenderId: "200196602175"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');