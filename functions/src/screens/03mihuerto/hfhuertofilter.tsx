import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native';
import Estilo from '../../constants/Estilo';
import { setHFTipoFilter } from '../../redux/actions/filters'

// mapeo
const mapStateToProps = ( state ) =>
{
    return {
        // hfplantacion: getHfPlantacion( state.hfplantacion, state.filters )
        filters: state.filters
    }
}

const HfHuertoFilter = ( props ) => (
    <View>
        <Text style={ Estilo.parrafo }>Filtro</Text>
        <TextInput
            placeholder="Tipo"
            style={ Estilo.input }
            value={ props.filters.hftipo }
            onChangeText={ ( filtro ) =>
            {
                //console.log( filtro );
                props.dispatch( setHFTipoFilter( filtro ) );
            } } />
    </View>
);

export default connect( mapStateToProps )( HfHuertoFilter );