/** 
https://huertify.atlassian.net/browse/HTFY-25
*/
import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { Avatar } from "react-native-elements";

import Estilo       from '../../constants/Estilo';
import FooterHf     from '../_layout/footer';
import Plantacion, {getPlantaciones} from '../../model/plantacion'

export default function GerminacionScreen({ navigation }){

	return (
		<View style={Estilo.contenedor}>
		
			<Avatar rounded source={require('../../assets/images/Cucumber_leaf.png')} />
			<Text style={Estilo.h1}>Germinacion</Text>

			<ScrollView>

				<Text style={Estilo.parrafo}>Qu&eacute; es?</Text>
				<TextInput
					placeholder="Menu plantas"
					style={Estilo.input}
					//onChangeText={(value) => handleChangeText(value, "name")}
					/>

				<Text style={Estilo.parrafo}>Cu&aacute;ntas son?</Text>
				<TextInput
					placeholder="numero"
					style={Estilo.input}
					//onChangeText={(value) => handleChangeText(value, "name")}
					/>


{/*
Ubicación
[ ver en el mapa ]

Cruzamiento
menu

Código QR
(el codigo qr)

- Seleccionada (checked)

Código [QR] - Mandar al e-mail

* Nos falta la tuya? Avísanos!

*/}



				<View style={Estilo.parrafo}>
					<Button 
						title="Generar QR" 
						onPress={() => console.log('saveNewUser()')}
						/>
				</View>

			</ScrollView>

			<FooterHf />

		</View>
	);

};