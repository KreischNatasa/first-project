// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAx7cc2cDm6VpnB293cNqJCVzIoqbzYwU",
    authDomain: "nati-7f2c2.firebaseapp.com",
    databaseURL: "https://nati-7f2c2.firebaseio.com",
    projectId: "nati-7f2c2",
    storageBucket: "nati-7f2c2.appspot.com",
    messagingSenderId: "1057651090989",
    appId: "1:1057651090989:web:33b3740142885f333cfaa4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var database_articles = firebase.database().ref("articles");