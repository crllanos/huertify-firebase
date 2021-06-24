/**
https://huertify.atlassian.net/browse/HTFY-25
*/
import React, { useState } from 'react';
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { Avatar } from "react-native-elements";
import Alert from "react-native-awesome-alerts";

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import HfPlantacion, { HFLogin, HFPlantacionTipo, HFCantidad, HFPlantacionUbicacion } from '../../model/hfplantacion'
import HfTipo from '../../model/hftipo'

export default function GerminacionScreen({ navigation })
{

	// Pronto!
	const [ showPronto, setShowPronto ] = useState(false);
	function pronto()
	{
		setShowPronto(true);
		setTimeout(function () { setShowPronto(false); }, 1500);
	}



	// Planta
	const [ planta, setPlanta ] = useState(
		{
			hflogin: 'usuario@ejemplo.cl'
			, hftipo: ''
			, hfcantidad: 1
			, hfgerminacion: new Date()
			, hfgeo: 'any' // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
		}
	);
	const guardaPlanta = (k, v) =>
	{
		setPlanta({ ...planta, [ k ]: v });
		console.log(planta)
	}

	return (
		<View style={ Estilo.contenedor }>

			<Avatar rounded source={ require('../../assets/images/Cucumber_leaf.png') } />
			<Text style={ Estilo.h1 }>Germinacion</Text>

			<ScrollView>

				<HFLogin
					hfplanta={ planta }
					onChangeText={ (v) => guardaPlanta('hflogin', v) }
				/>

				<HfTipo
					hfplanta={ planta }
					onChangeValue={ (v) => guardaPlanta('hftipo', v) }
				/>

				<HFCantidad
					hfplanta={ planta }
					onChangeText={ (v) => guardaPlanta('hfcantidad', v) }
				/>

				{/* parche*/ }
				<View>
					<Text style={ Estilo.parrafo }>Fecha</Text>
					<Text>(hoy)</Text>
				</View>

				{/* <HFPlantacionUbicacion /> */ }




				{/*



Cruzamiento
menu

Código QR
(el codigo qr)

- Seleccionada (checked)

Código [QR] - Mandar al e-mail

* Nos falta la tuya? Avísanos!

*/}



				<View style={ Estilo.parrafo }>
					<Button
						title="Generar QR"
						onPress={ () => console.log(planta) }
					/>
				</View>

			</ScrollView>

			<Alert
				show={ showPronto }
				message="Pronto!"
			/* closeOnTouchOutside={true} */
			/>

			<FooterHf />

		</View>
	);

};