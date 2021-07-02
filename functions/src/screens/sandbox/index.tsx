import React, { useState } from 'react';
import { Avatar } from "react-native-elements";
import { Text, View, ScrollView, Button } from 'react-native';

import Colors from '../../constants/Colors';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import PruebaModal from './modal';

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
					<Button
						color={ Colors.verde }
						onPress={ this.handleModal }
						title="Abrir modal" />

					<PruebaModal
						verModal={ this.state.verModal }
						/* texto="Holanda que Talca" */
						closeModal={ this.closeModal } />


				</ScrollView>

				<TestPropsLog />

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
