import firebase from 'firebase'
import 'firebase/firestore'

import FirebaseConfig from './connection'
import HfPlantacion from '../../model/hfplantacion'


/**
 * Coleccion en Firesbase
 *
 */
const hfcollection = 'HFPLANTACION';


/**
 * Almacena una planta en localStore
 * @param {*} planta
 */
export const addPlantacionLocal = async ( planta: HfPlantacion ) =>
{
	// local
	// https://huertify.atlassian.net/browse/HTFY-40
}

/**
 * Almacena una planta en Firestore
 * @param {*} planta
 */
export const addPlantacionBackend = async ( plantacion: HfPlantacion ) =>
{
	console.log( 'Intenta guardar en Firebase', plantacion );
	firebase.initializeApp( FirebaseConfig );
	const hfdb_con = firebase.firestore();
	await hfdb_con.collection( hfcollection ).add( plantacion );
}