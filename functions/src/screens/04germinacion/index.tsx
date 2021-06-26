/**
https://huertify.atlassian.net/browse/HTFY-25
*/
import React, { useState } from 'react';
import
{
	Text
	, Image
	, View
	, TextInput
	, ScrollView
	, Button
	, StyleSheet
	, Picker
	, CheckBox
} from 'react-native';
import { Avatar } from "react-native-elements";
import Alert from "react-native-awesome-alerts";

import HfPlantacion, {
	HFLogin
	, HFCantidad
	, HFPlantacionUbicacion
} from '../../model/hfplantacion'
import HfTipo from '../../model/hftipo'
import { addPlantacionBackend } from '../../model/hfdb/hfdb'

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function GerminacionScreen ( { navigation } )
{


	// Planta @todo como pasar a Objeto HFPlanta

	const hfplantacion: HfPlantacion = {
		hflogin: 'usuario@ejemplo.cl'
		, hftipo: ''
		, hfcantidad: 1
		, hfgerminacion: new Date()
		, hfgeo: 'any' // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
	};

	const [ planta, setPlanta ] = useState( hfplantacion );
	const [ consentimiento, setConsentimiento ] = useState( true );
	const [ showGuardado, setShowGuardado ] = useState( false );




	const guardaPlanta = ( k, v ) =>
	{
		console.log( 'guardaPlanta 1', planta );
		setPlanta( { ...planta, [ k ]: v } );
		console.log( 'guardaPlanta 2', planta );
	}


	const guardaConsentimiento = ( c ) =>
	{
		console.log( 'setConsentimiento', c );
		setConsentimiento( c );
	}

	const generaQR = () =>
	{
		console.log( 'generaQR', planta );
		console.log( 'consentimiento', consentimiento );

		return;

		// validar
		if ( "parche" !== "parche" )
		{
			alert( 'holi' );
		} else
		{
			// persistencia backend opcional
			if ( consentimiento )
			{
				addPlantacionBackend( planta )
			}


			// Generar QR https://huertify.atlassian.net/browse/HTFY-39
		}

		guardado()

	}

	function guardado ()
	{
		setShowGuardado( true );
		setTimeout( function () { setShowGuardado( false ); }, 1500 );
		console.log( 'setShowGuardado(true)' )

		// redireccionar a Mi Huerto
		// https://huertify.atlassian.net/browse/HTFY-23
	}

	return (
		<View style={ Estilo.contenedor }>

			<Avatar rounded source={ require( '../../assets/images/Cucumber_leaf.png' ) } />
			<Text style={ Estilo.h1 }>Germinacion</Text>

			<ScrollView>

				<HFLogin
					hfplanta={ planta }
					onChangeText={ ( v ) => guardaPlanta( 'hflogin', v ) }
				/>

				<HfTipo
					hfplanta={ planta }
					onChangeValue={ ( v ) => guardaPlanta( 'hftipo', v ) }
				/>

				<HFCantidad
					hfplanta={ planta }
					onChangeText={ ( v ) => guardaPlanta( 'hfcantidad', v ) }
				/>

				{/* parche*/ }
				<View>
					<Text style={ Estilo.parrafo }>Fecha</Text>
					<Text>(hoy)</Text>
				</View>

				<HFPlantacionUbicacion />

				<View style={ Estilo.checkboxContainer }>
					<CheckBox
						value={ consentimiento }
						onValueChange={ ( v ) => guardaConsentimiento( v ) }
					/>
					<Text style={ Estilo.checkboxLabel }>quiero compartir la información de mi huerto.</Text>
				</View>





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