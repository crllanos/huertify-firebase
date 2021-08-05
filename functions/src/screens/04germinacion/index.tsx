/**
https://huertify.atlassian.net/browse/HTFY-25
*/
import React, { useState } from 'react';
import
{
	Text
	, View
	, ScrollView
	, Button
	, CheckBox
} from 'react-native';
import { Avatar } from "react-native-elements";
import uuid from 'react-native-uuid';


import HfPlantacion, {
	HFLogin
	, HFCantidad
	, HFPlantacionUbicacion
} from '../../model/hfplantacion'
import HfTipo from '../../model/hftipo'
import { addPlantacionLocal, addPlantacionBackend } from '../../model/hfdb'
import GerminacionForm from './germinacionForm'

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function GerminacionScreen ( { navigation } )
{

	// PRUEBA SPREAD OBJECT - default values expansible
	let spread = { name: 'toma', id: 9, prueba: 'testotro' };
	console.log( {
		prueba: 'teste',
		...spread,
		id: 10
	} );



	// Planta @todo como pasar a Objeto HFPlanta
	const hfplantacion: HfPlantacion = {
		hfid: uuid.v4()
		, hflogin: 'usuario@ejemplo.cl'
		, hftipo: 'Apio'
		, hfcantidad: 2
		, hfgerminacion: new Date()
		, hfgeo: 'any' // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
	};
	console.log( 'hfplantacion', hfplantacion );


	const [ planta, setPlanta ] = useState( hfplantacion );
	const [ consentimiento, setConsentimiento ] = useState( true );

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

				<GerminacionForm />

				{/*
				<HFLogin
					hflogin={ planta.hflogin }
					onChangeText={ ( v ) => guardaPlanta( 'hflogin', v ) }
				/>

				<HfTipo
					hftipo={ planta.hftipo }
					onChangeValue={ ( v ) => guardaPlanta( 'hftipo', v ) }
				/>

				<HFCantidad
					hfcantidad={ planta.hfcantidad }
					onChangeText={ ( v ) => guardaPlanta( 'hfcantidad', v ) }
				/>
				*/ }

				{/* Fecha - enum [hoy, 1 semana, 1 mes]*/ }
				{/* https://huertify.atlassian.net/browse/HTFY-42 */ }
				{/*
				<View>
					<Text style={ Estilo.parrafo }>Fecha</Text>
					<Text>(hoy)</Text>
				</View>

				<HFPlantacionUbicacion />
				*/ }

				{/* https://huertify.atlassian.net/browse/HTFY-41 */ }
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