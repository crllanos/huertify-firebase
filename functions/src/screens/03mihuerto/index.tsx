import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
//import HfPlantacion, { getPlantaciones } from '../../model/hfplantacion'
import HfHuerto from './hfhuerto';


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

				<HfHuerto />

				<Button title="Nueva germinacion"
					onPress={ () =>
					{
						console.log( 'Tratando de navegar...' )
						navigation.navigate( 'Root'/* , { // @todo-002 no funciona navegacion entre screens Root
						screen: 'InicioScreen',
						params: { user: 'jane' },
					} */)
					} } />

			</ScrollView>

			<FooterHf />

		</View>
	);

}
