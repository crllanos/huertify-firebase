import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

// mapeo
const mapStateToProps = ( state ) =>
{
	return {
		hfplantacion: state.hfplantacion
	}
}

// Componente
const HfHuerto = ( props ) => (
	<View>
		<Text>Listado del Huerto</Text>
		{ props.hfplantacion.length }
	</View>
);



export default connect( mapStateToProps )( HfHuerto );



/**

						<ListItem
							key={planta.id}
							bottomDivider
							onPress={() => {
								console.log(planta);
								//props.navigation.navigate("UserDetailScreen", {
								//  userId: user.id,
								//});
							}}
						>
							<ListItem.Chevron />
							<Avatar
								source={require('../../assets/images/Cucumber_leaf.png')}
								rounded
							/>
							<ListItem.Content>
								<ListItem.Title>{planta.tipo}</ListItem.Title>
								<ListItem.Subtitle>Germinacion: 12/jun</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>


*/
