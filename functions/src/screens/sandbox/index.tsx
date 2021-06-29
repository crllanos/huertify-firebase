import React from "react";
import { Avatar } from "react-native-elements";
import { Text, View, ScrollView } from 'react-native';

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import PruebaModal from './modal';

export default function SandboxScreen ( { navigation } )
{
	return (
		<View style={ Estilo.contenedor }>

			<Avatar rounded source={ require( '../../assets/images/Cucumber_leaf.png' ) } />
			<Text style={ Estilo.h1 }>Sandbox</Text>
			<Text style={ Estilo.italic }>espacio para pruebas</Text>

			<ScrollView>
				<PruebaModal />

			</ScrollView>

			<FooterHf />

		</View>
	);
};