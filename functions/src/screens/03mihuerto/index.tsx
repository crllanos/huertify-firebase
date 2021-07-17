import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

import HfPlantacion, { getPlantaciones } from '../../model/hfplantacion'
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';


export default function MiHuertoScreen ( { navigation } )
{
	// , { useState, useEffect } from "react";
	// const [ plantacion, setPlantacion ] = useState(Plantacion);
	/* no
	useEffect(() => {
	    const planta:Plantacion = {};
	    setPlantacion(planta);
	}, []);
	*/

	/* si
	const setVal = (k, v) => {
	    setPlantacion({ ...plantacion, [k]: v });
	};
	*/

	return (
		<View style={ Estilo.contenedor }>

			<Avatar rounded source={ require( '../../assets/images/Cucumber_leaf.png' ) } />
			<Text style={ Estilo.h1 }>Mi huerto</Text>

			{/* parche*/ }
			<View style={ Estilo.InicioEnlaces }>
				<Text style={ Estilo.parrafo }>usuario@ejemplo.cl</Text>
			</View>

			<ScrollView>
				{ getPlantaciones( "param de busqueda" ).map( ( planta ) =>
				{
					return (
						<ListItem
							key={ planta.id }
							bottomDivider
							onPress={ () =>
							{
								console.log( planta );
								//props.navigation.navigate("UserDetailScreen", {
								//  userId: user.id,
								//});
							} }
						>
							<ListItem.Chevron />
							<Avatar
								source={ require( '../../assets/images/Cucumber_leaf.png' ) }
								rounded
							/>
							<ListItem.Content>
								<ListItem.Title>{ planta.cantidad } { planta.tipo }</ListItem.Title>
								<ListItem.Subtitle>Germinacion: 12/jun</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					);
				} ) }


				<Button title="Nueva germinacion"
					onPress={ () =>
					{
						console.log( 'Tratando de navegar...' )
						navigation.navigate( 'Root'/* , { // @todo-002 no funciona navegacion entre screens Root
						screen: 'InicioScreen',
						params: { user: 'jane' },
					} */)
					} } />

			</ScrollView>

			<FooterHf />

		</View>
	);

}
