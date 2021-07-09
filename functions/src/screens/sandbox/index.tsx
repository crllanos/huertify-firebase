import React, { useState } from 'react';
import { Avatar } from "react-native-elements";
import { Text, View, ScrollView, Button } from 'react-native';
// import { Provider } from 'react-redux';

import Colors from '../../constants/Colors';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import PruebaModal from './modal';


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
			{ props.isAdmin && <Text>PRIVADO</Text> }
			<WrappedComponent { ...props } />
		</View>
	)
}
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

					<HocPrueba info="holi!" isAdmin={ true } />

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
