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
console.log( 'mi_store = configStore().getState()', mi_store.getState() );


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
mi_store.dispatch( setHFPlantacionFilter( 'Tomate', '' ) );
mi_store.dispatch( setHFPlantacionFilter( 'Albahaca', '' ) );

const state = mi_store.getState();
const mi_hfplantacion = getHfPlantacion( state.hfplantacion, state.filters ); // ??? ESTE me da error en /selectors/hfplantacion.tsx:13
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
