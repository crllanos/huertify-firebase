import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native';
import Estilo from '../../constants/Estilo';
import { setHFTipoFilter, sortByHFTipo, sortByHFCantidad } from '../../redux/actions/filters'

// mapeo
const mapStateToProps = ( state ) =>
{
    return {
        // hfplantacion: getHfPlantacion( state.hfplantacion, state.filters )
        filters: state.filters
    }
}

const HfHuertoFilter = ( props ) => (


    < View >
        <Text style={ Estilo.parrafo }>Filtro</Text>
        <TextInput
            placeholder="Tipo"
            style={ Estilo.input }
            value={ props.filters.hftipo }
            onChangeText={ ( filtro ) =>
            {
                //console.log( filtro );
                console.log( 'HfHuertoFilter.props.filters', props.filters )
                props.dispatch( setHFTipoFilter( filtro ) );
            } } />

        {/** @todo alternativas select https://huertify.atlassian.net/browse/HTFY-57 */ }
        {/** @todo Sacar los value de ENUM https://huertify.atlassian.net/browse/HTFY-58 */ }
        <select
            value={ props.filters.sortBy }
            onChange={ ( e ) =>
            {
                {/** @todo No funciona el sortBy https://huertify.atlassian.net/browse/HTFY-59 */ }
                console.log( 'SORTING BY', e.target.value );

                if ( e.target.value === 'hftipo' )
                {
                    props.dispatch( sortByHFTipo() );

                } else if ( e.target.value === 'hfcantidad' )
                {
                    props.dispatch( sortByHFCantidad() );

                } else if ( e.target.value === 'hfgerminacion' )
                {
                    alert( 'hfgerminacion @HTFY-58' );

                }
            } }
        >
            <option value="">...</option>
            <option value="hftipo">hfTipo</option>
            <option value="hfcantidad">hfCantidad</option>
            <option value="hfgerminacion">hfGerminacion</option>
        </select>
    </View >
);

export default connect( mapStateToProps )( HfHuertoFilter );