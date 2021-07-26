import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet } from 'react-native';

//import useCachedResources   from './hooks/useCachedResources';
//import useColorScheme       from './hooks/useColorScheme';
import Navigation from './src/navigation';



// !--REDUX (99 Organizing Redux)
import { Provider } from 'react-redux';
import configStore from './src/redux/store/configStore';
import { addHfPlantacion } from './src/redux/actions/hfplantacion'
import { setHFPlantacionFilter } from './src/redux/actions/filters'
import getHfPlantacion from './src/redux/selectors/hfplantacion'

const mi_store = configStore();

// 1) insert
mi_store.dispatch( addHfPlantacion( {
	hftipo: "Tomate"
	, hfcantidad: 2
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
mi_store.dispatch( addHfPlantacion( {
	hftipo: "Albahaca"
	, hfcantidad: 1
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );


// 2) filter
//mi_store.dispatch( setHFPlantacionFilter( 'mate', '' ) );
mi_store.dispatch( setHFPlantacionFilter( 'a', '' ) ); // uno u otro..


// 3) select
const state = mi_store.getState();
const mi_hfplantacion = getHfPlantacion( state.hfplantacion, state.filters );

console.log( 'mi_hfplantacion', mi_hfplantacion );
console.log( 'mi_store.getState() !!!', mi_store.getState() );


/*

//console.log( 'pinche state', state );





console.log( 'pinche mi_store II', mi_store );
console.log( 'pinche state II', state );
*/

// REDUX--




export default function App ()
{
	return (
		<SafeAreaProvider>
			<Navigation /* colorScheme={colorScheme}  // @todo-001 generar scheme dark */ />
			<StatusBar />
		</SafeAreaProvider>
	);
}
