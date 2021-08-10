import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//import useCachedResources   from './hooks/useCachedResources';
//import useColorScheme       from './hooks/useColorScheme';
import Navigation from './src/navigation';
import NativeNavigation from './src/navigationnative';


// !--REDUX (99 Organizing Redux)
import { Provider } from 'react-redux';
import configStore from './src/redux/store/configStore';
import { addHfPlantacion } from './src/redux/actions/hfplantacion'
import { setHFPlantacionFilter } from './src/redux/actions/filters'

const hfstore = configStore();

// 1) insert
hfstore.dispatch( addHfPlantacion( {
	hftipo: "Tomate"
	, hfcantidad: 8
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
hfstore.dispatch( addHfPlantacion( {
	hftipo: "Zapallo"
	, hfcantidad: 4
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
hfstore.dispatch( addHfPlantacion( {
	hftipo: "Albahaca"
	, hfcantidad: 7
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );


// 2) filter
//hfstore.dispatch( setHFPlantacionFilter( 'mate', '' ) );
//hfstore.dispatch( setHFPlantacionFilter( 'a', 1, new Date() ) ); // uno u otro..


// 3) select
//const state = hfstore.getState();
//const mi_hfplantacion = getHfPlantacion( state.hfplantacion, state.filters );
//console.log( 'mi_hfplantacion', mi_hfplantacion );
//console.log( 'hfstore.getState() !!!', hfstore.getState() );

// REDUX--



export default function App ()
{
	return (
		<SafeAreaProvider>
			<Provider store={ hfstore }>
				{/** <Navigation / * colorScheme={colorScheme}  // @todo-001 generar scheme dark * / /> */ }
				<NativeNavigation>

				</NativeNavigation>
			</Provider>
			<StatusBar />
		</SafeAreaProvider>
	);
}
