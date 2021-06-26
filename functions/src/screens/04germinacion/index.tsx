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

import HfPlantacion, {
	HFLogin
	, HFCantidad
	, HFPlantacionUbicacion
} from '../../model/hfplantacion'
import HfTipo from '../../model/hftipo'
import { addPlantacionLocal, addPlantacionBackend } from '../../model/hfdb'

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function GerminacionScreen ( { navigation } )
{
	const [ planta, setPlanta ] = useState( hfplantacion );
	const [ consentimiento, setConsentimiento ] = useState( true );

	// Planta @todo como pasar a Objeto HFPlanta
	const hfplantacion: HfPlantacion = {
		hflogin: 'usuario@ejemplo.cl'
		, hftipo: ''
		, hfcantidad: 1
		, hfgerminacion: new Date()
		, hfgeo: 'any' // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
	};

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

		// validar
		if ( "parche" !== "parche" )
		{
			alert( 'holi' );
		} else
		{
			// Persistencia local - localStore https://huertify.atlassian.net/browse/HTFY-40
			addPlantacionLocal( planta );

			// Generar QR https://huertify.atlassian.net/browse/HTFY-39

			// persistencia backend opcional
			if ( consentimiento )
			{
				addPlantacionBackend( planta );
			}
		}

		console.log( 'Guardada', planta )
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
						testID="testID"
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

*/}



				<View style={ Estilo.parrafo }>
					<Button
						title="Generar QR"
						onPress={ () => generaQR() }
					/>
				</View>

			</ScrollView>

			<FooterHf />

		</View>
	);

};