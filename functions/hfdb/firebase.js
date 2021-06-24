import firebase from 'firebase'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyB_DEKpWGNXlFRtZetb0Q-Mt2zFtmWkHp8",
	authDomain: "sandbox-hf-cc176.firebaseapp.com",
	databaseURL: "https://sandbox-hf-default-rtdb.firebaseio.com",
	projectId: "sandbox-hf",
	storageBucket: "sandbox-hf.appspot.com",
	messagingSenderId: "996945947494",
	appId: "1:996945947494:web:fee42ef798c9d15accb6a7"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const hfdb = firebase.firestore();

export default
	{
		firebase
		, hfdb
	};