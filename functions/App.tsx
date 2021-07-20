import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet } from 'react-native';

//import useCachedResources   from './hooks/useCachedResources';
//import useColorScheme       from './hooks/useColorScheme';
import Navigation from './src/navigation';



// !--REDUX
import { Provider } from 'react-redux';
import configStore from './src/redux/store/configStore';
import { addHfPlantacion } from './src/redux/actions/hfplantacion'
import { setHFPlantacionFilter } from './src/redux/actions/filters'
import getHfPlantacion from './src/redux/selectors/hfplantacion'

const mi_store = configStore();

mi_store.dispatch( addHfPlantacion( {
	hftipo: "sativa"
	, hfcantidad: 2
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
mi_store.dispatch( addHfPlantacion( {
	hftipo: "indiga"
	, hfcantidad: 1
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
// mi_store.dispatch( setHFPlantacionFilter( { hftipo: 'sativa' } ) );
// mi_store.dispatch( setHFPlantacionFilter( { hftipo: 'indiga' } ) );

const state = mi_store.getState();
const mi_hfplantacion = getHfPlantacion( state.hfplantacion, state.filters );
console.log( 'pinche mi_store', mi_store );
console.log( 'mi_hfplantacion', mi_hfplantacion );

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
