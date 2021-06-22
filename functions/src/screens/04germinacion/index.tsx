/** 
https://huertify.atlassian.net/browse/HTFY-25
*/
import React, { useState } from 'react';
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { Avatar } from "react-native-elements";
import Alert from "react-native-awesome-alerts";

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import HfPlantacion, { HFPlantacionTipo, HFPlantacionCantidad, HFPlantacionUbicacion } from '../../model/hfplantacion'
import HfTipo from '../../model/hftipo'

export default function GerminacionScreen({ navigation }) {

	// Planta
	const [planta, setPlanta] = useState(
		{
			  hftipo:'Tomates'
			, hfcantidad: 1
			, hfgerminacion: new Date()
			, hflogin: 'usuario@ejemplo.cl'
			, hfgeo : 'any' // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
		}
	);
	console.log(planta)


	// Pronto!
	const [showPronto, setShowPronto] = useState(false);
	function pronto() {
		setShowPronto(true);
		setTimeout(function () { setShowPronto(false); }, 1500);
	}

	return (
		<View style={Estilo.contenedor}>

			<Avatar rounded source={require('../../assets/images/Cucumber_leaf.png')} />
			<Text style={Estilo.h1}>Germinacion</Text>

			<ScrollView>

				{/* parche*/}
				<View>
					<Text style={Estilo.parrafo}>Usuario</Text>
					<TextInput
						style={Estilo.input}
						placeholder="usuario@ejemplo.cl"
					//onChangeText={(value) => handleChangeText(value, "name")}
					/>
				</View>

				<HfTipo />

				<HFPlantacionCantidad />

				{/* parche*/}
				<View>
					<Text style={Estilo.parrafo}>Fecha</Text>
					<Text>(hoy)</Text>
				</View>

				{/* <HFPlantacionUbicacion /> */}




				{/*



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
						onPress={() => pronto()}
					/>
				</View>

			</ScrollView>

			<Alert
				show={showPronto}
				message="Pronto!"
			/* closeOnTouchOutside={true} */
			/>

			<FooterHf />

		</View>
	);

};