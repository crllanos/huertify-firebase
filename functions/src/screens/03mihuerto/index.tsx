import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
//import HfPlantacion, { getPlantaciones } from '../../model/hfplantacion'
import HfHuerto from './hfhuerto';
import HfHuertoFilter from "./hfhuertofilter";


export default function MiHuertoScreen ( { navigation } )
{
	return (
		<View style={ Estilo.contenedor }>

			<Avatar rounded source={ require( '../../assets/images/Cucumber_leaf.png' ) } />
			<Text style={ Estilo.h1 }>Mi huerto</Text>

			{/* parche*/ }
			<View style={ Estilo.InicioEnlaces }>
				<Text style={ Estilo.parrafo }>usuario@ejemplo.cl</Text>
			</View>

			<ScrollView>

				<HfHuertoFilter />
				<HfHuerto />

				<Button title="Nueva germinacion"
					onPress={ () =>
					{
						navigation.navigate( 'Germinacion', { hfid: -999, otro: 'mas' } );
						/*
						https://reactnavigation.org/docs/navigating

						navigation.push('Germinacion') // push allows us to express the intent to add another route regardless of the existing navigation history.
						Each time you call push we add a new route to the navigation stack. When you call navigate it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack.

						navigation.goBack(); // On Android, React Navigation hooks in to the hardware back button and fires the goBack() function for you when the user presses it, so it behaves as the user would expect.

						navigation.popToTop(); // goes back to the first screen in the stack.



						navigation.navigate( 'Root' , { // @todo-002 no funciona navegacion entre screens Root
						screen: 'InicioScreen',
						params: { user: 'jane' },
					} )*/
					} } />

			</ScrollView>

			<FooterHf />

		</View>
	);

}
