import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//import useCachedResources   from './hooks/useCachedResources';
//import useColorScheme       from './hooks/useColorScheme';
import Navigation from './src/navigation';



// !--REDUX (99 Organizing Redux)
import { Provider } from 'react-redux';
import configStore from './src/redux/store/configStore';
import { addHfPlantacion } from './src/redux/actions/hfplantacion'
import { setHFPlantacionFilter } from './src/redux/actions/filters'
import getHfPlantacion from './src/redux/selectors/hfplantacion'

const hfstore = configStore();

// 1) insert
hfstore.dispatch( addHfPlantacion( {
	hftipo: "Tomate"
	, hfcantidad: 2
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
hfstore.dispatch( addHfPlantacion( {
	hftipo: "Albahaca"
	, hfcantidad: 1
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );


// 2) filter
//hfstore.dispatch( setHFPlantacionFilter( 'mate', '' ) );
hfstore.dispatch( setHFPlantacionFilter( 'a', new Date() ) ); // uno u otro..


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
				<Navigation /* colorScheme={colorScheme}  // @todo-001 generar scheme dark */ />
			</Provider>
			<StatusBar />
		</SafeAreaProvider>
	);
}
