/**
https://huertify.atlassian.net/browse/HTFY-25
*/
import React, { useState } from 'react';
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { Avatar } from "react-native-elements";
import Alert from "react-native-awesome-alerts";

import firebase from '../../model/hfdb/firebase'
import HfPlantacion, { HFLogin, HFPlantacionTipo, HFCantidad, HFPlantacionUbicacion } from '../../model/hfplantacion'
import HfTipo from '../../model/hftipo'

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function GerminacionScreen({ navigation })
{

	// Pronto!
	const [ showGuardado, setShowGuardado ] = useState(false);
	function guardado()
	{
		setShowGuardado(true);
		setTimeout(function () { setShowGuardado(false); }, 1500);

		// redireccionar a Mi Huerto
		// https://huertify.atlassian.net/browse/HTFY-23
	}



	// Planta
	const [ planta, setPlanta ] = useState(
		{
			hflogin: 'usuario@ejemplo.cl'
			, hftipo: ''
			, hfcantidad: '1'
			, hfgerminacion: new Date()
			, hfgeo: 'any' // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
		}
	);

	const guardaPlanta = (k, v) =>
	{
		setPlanta({ ...planta, [ k ]: v });
	}

	const generaQR = async () =>
	{
		console.log('generaQR', planta);

		// validar
		if ("parche" === "parche2")
		{

		} else
		{
			// dejar dentro de '../../model/hfdb/firebase'
			await firebase.hfdb.collection('hfplanta').add(planta);

			// Generar QR https://huertify.atlassian.net/browse/HTFY-39
		}
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
						onPress={ () => generaQR() }
					/>
				</View>

			</ScrollView>

			<Alert
				show={ showGuardado }
				message="Guardado!"
			/* closeOnTouchOutside={true} */
			/>

			<FooterHf />

		</View>
	);

};