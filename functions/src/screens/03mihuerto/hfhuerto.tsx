import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import HfHuertoItem from './hfhuertoitem'
import getHfPlantacion from '../../redux/selectors/hfplantacion'

// mapeo
const mapStateToProps = ( state ) =>
{
	return {
		hfplantacion: getHfPlantacion( state.hfplantacion, state.filters )
	}
}

// Componente
const HfHuerto = ( props ) => (
	<View>
		<Text>Listado del Huerto</Text>
		{ props.hfplantacion.map( ( planta ) =>
		{
			console.log( "planta", planta );

			return <HfHuertoItem key={ planta.hfid } { ...planta } />
		} ) }
	</View>
);



export default connect( mapStateToProps )( HfHuerto );
