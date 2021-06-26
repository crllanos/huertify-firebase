import firebase from 'firebase'
import 'firebase/firestore'

import HfPlantacion from '../../model/hfplantacion'


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

const hfdb_con = firebase.firestore();

// Coleccion en Firesbase
const hfcollection = 'HFPLANTACION';

export default
	{
		firebase
		, hfdb_con
	};

/**
 * Almacena una planta en localStore
 * @param {*} planta
 */
export const addPlantacionLocal = async ( planta: HfPlantacion ) =>
{
	// local
	// https://huertify.atlassian.net/browse/HTFY-40
}

export const addPlantacionBackend = async ( plantacion ) => // : HfPlantacion
{
	console.log( 'Intenta guardar en Firebase', plantacion );
	await hfdb_con.collection( hfcollection ).add( plantacion );
}