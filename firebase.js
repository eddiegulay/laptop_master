/****
 * Installing firebase
****/

const firebaseConfig = {
    apiKey: "AIzaSyBeL3fGrBT3b_-fcToNryzwlNgZA1OQQkY",
    authDomain: "laptopmkt-66104.firebaseapp.com",
    projectId: "laptopmkt-66104",
    storageBucket: "laptopmkt-66104.appspot.com",
    messagingSenderId: "593852286896",
    appId: "1:593852286896:web:8bc78c07e890d13dba3875",
    measurementId: "G-CB8SCHJHQJ",
    databaseURL: "https://laptopmkt-66104-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();