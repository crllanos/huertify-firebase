import React, { useState } from 'react';
import { Avatar } from "react-native-elements";
import { Text, View, ScrollView, Button } from 'react-native';

import Colors from '../../constants/Colors';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import PruebaModal from './modal';

/**
// !--REDUX
import { Provider } from 'react-redux';
import configStore from '../../redux/store/configStore';
import { addHfPlantacion } from '../../redux/actions/hfplantacion'
import { setHFPlantacionFilter } from '../../redux/actions/filters'
import getHfPlantacion from '../../redux/selectors/hfplantacion'

const mi_store = configStore();

mi_store.dispatch( addHfPlantacion( {
	hftipo: "sativa"
	, hfcantidad: 2
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
mi_store.dispatch( addHfPlantacion( {
	hftipo: "indiga"
	, hfcantidad: 1
	, hfgerminacion: new Date()
	, hflogin: {}
	, hfgeo: {}
} ) );
mi_store.dispatch( setHFPlantacionFilter( { hftipo: 'sativa' } ) );

const state = mi_store.getState();
const mi_hfplantacion = getHfPlantacion( state.hfplantacion, state.filters );
console.log( 'pinche mi_store', mi_store );
console.log( 'mi_hfplantacion', mi_hfplantacion );

// REDUX--
*/

// High Order Components
const HocInfo = ( props ) => (
	<View>
		<Text>Prueba de High Order Components: { props.info }</Text>
	</View>
);

const HocAdminWarn = ( WrappedComponent ) =>
{
	return ( props ) => (
		<View>
			<Text>!--HoC Example</Text>
			{ props.isAdmin && <Text>UD isAdmin!</Text> }
			{ !props.isAdmin && <Text>UD !isAdmin</Text> }
			{ props.isAuthenticated && <Text>UD isAuthenticated!</Text> }
			{ !props.isAuthenticated && <Text>UD !isAuthenticated</Text> }
			<WrappedComponent { ...props } />
			<Text>HoC Example--</Text>
		</View>
	)
}

// requireAuthentication
/**
 * evaluar boolean isAuthenticated
 *
 */
const HocPrueba = HocAdminWarn( HocInfo );



export default class SandboxScreen extends React.Component // ( { navigation } )
{


	constructor( props )
	{
		super( props );
		console.log( 'props', props );

	}

	state = {
		verModal: false
	}

	handleModal = () =>
	{
		this.setState( ( prevState ) =>
		{
			this.state.verModal = !prevState.verModal;
			return this.state.verModal
		} );
	}

	closeModal = () =>
	{
		this.setState( ( prevState ) =>
		{
			this.state.verModal = false;
			return this.state.verModal
		} );
	}





	render ()
	{
		return (
			<View style={ Estilo.contenedor } >

				<Avatar rounded source={ require( '../../assets/images/Cucumber_leaf.png' ) } />
				<Text style={ Estilo.h1 }>Sandbox</Text>
				<Text style={ Estilo.italic }>espacio para pruebas</Text>


				<ScrollView>
					<TestPropsLog />

					<HocPrueba info="holi!" isAdmin={ true } isAuthenticated={ false } />

					<Button
						color={ Colors.verde }
						onPress={ this.handleModal }
						title="Abrir modal" />

					<PruebaModal
						verModal={ this.state.verModal }
						/* texto="Holanda que Talca" */
						closeModal={ this.closeModal } />


				</ScrollView>


				<FooterHf />

			</View>
		);
	};
};

export const TestPropsLog = ( props ) =>
{
	console.log( 'TestPropsLog', props );

	return (
		<Text>TestPropsLog</Text>
	);

}
