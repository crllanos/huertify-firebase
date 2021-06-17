/** 
https://huertify.atlassian.net/browse/HTFY-25
*/
import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { Avatar } from "react-native-elements";

import Estilo       from '../../constants/Estilo';
import FooterHf     from '../_layout/footer';
import { getPlantaciones} from '../../model/hfplantacion'
//import PlantacionPro from '../../model/hfplantacionpro'
import HfPlantacion from '../../model/hfplantacion'

export default function GerminacionScreen({ navigation }){

	//let planta = new HfPlantacion(1, 'Tomate', new Date(), 'hfy001'); <HfPlantacion />
	//console.log(planta.hf_toString());
	//console.log(planta);

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