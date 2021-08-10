import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native';
import Estilo from '../../constants/Estilo';
import { setHFTipoFilter, sortByHFTipo, sortByHFCantidad } from '../../redux/actions/filters'
//import { setHFGerminacion, setHFCosecha } from '../../redux/actions/filters'
import { DateRangePicker } from 'react-dates'

class HfHuertoFilter extends React.Component
{


    state = {
        calendarFocused: null
    }

    onDatesChange = ( { startDate, endDate } ) =>
    {
        console.log( 'startDate', startDate );
        console.log( 'endDate', endDate );
        console.log( 'PENDIENTE LOS DISPATCH, ver 99 Organizing Redux' );

        //this.props.dispatch( setHFGerminacion( startDate ) ); revisar 99 organizing redux
        //this.props.dispatch( setHFCosecha( endDate ) );
    }

    onFocusChange = ( calendarFocused ) =>
    {
        this.setState( () => ( { calendarFocused } ) );
    }


    render ()
    {
        console.log( 'this.props.filters', this.props.filters )
        return (

            < View >
                <Text style={ Estilo.parrafo }>Filtro</Text>
                <TextInput
                    placeholder="Tipo"
                    style={ Estilo.input }
                    value={ this.props.filters.hftipo }
                    onChangeText={ ( filtro ) =>
                    {
                        //console.log( filtro );
                        console.log( 'HfHuertoFilter.props.filters', this.props.filters )
                        this.props.dispatch( setHFTipoFilter( filtro ) );
                    } } />

                {/** @todo alternativas select https://huertify.atlassian.net/browse/HTFY-57 */ }
                {/** Será HTFY-57 el motivo de la falla?? */ }
                {/** @todo Sacar los value de ENUM https://huertify.atlassian.net/browse/HTFY-58 */ }
                <select
                    value={ this.props.filters.sortBy } // estará bien escrito "sortBy"??
                    onChange={ ( e ) =>
                    {
                        {/** @todo No funciona el sortBy https://huertify.atlassian.net/browse/HTFY-59 */ }
                        console.log( 'SORTING BY', e.target.value );
                        console.log( 'props.dispatch', this.props.dispatch ); // Imprime: "props.dispatch // function dispatch ( action ) // hfhuertofilter.tsx: 40" TIRURIRU!!

                        if ( e.target.value === 'hftipo' )
                        {
                            console.log( 'dispatch( sortByHFTipo )' ); // Consola muestra 2 veces: "INTENTA HfSortby.HFTIPO  HFTIPO" pero no parece funcionar bien. Ni idea..
                            this.props.dispatch( sortByHFTipo() );

                        } else if ( e.target.value === 'hfcantidad' )
                        {
                            // https://huertify.atlassian.net/browse/HTFY-59
                            console.log( 'dispatch( sortByHFCantidad )' ); // ???? RARO, imprime pero no parece ejecutar nada más, a diferencia de sortByHFTipo
                            this.props.dispatch( sortByHFCantidad() );
                            console.log( 'dispatch( sortByHFCantidad ) II' ); // imprime pero no parece ejecutar nada más

                        } else if ( e.target.value === 'hfgerminacion' )
                        {
                            console.log( 'dispatch( hfgerminacion )' );
                            alert( 'hfgerminacion @HTFY-58' ); // Se ve esta alerta moment()

                        }
                    } }
                >
                    <option value="">...</option>
                    <option value="hftipo">hfTipo</option>
                    <option value="hfcantidad">hfCantidad</option>
                    <option value="hfgerminacion">hfGerminacion</option>
                </select>

                <DateRangePicker
                    startDateId="MyDatePickerStartDateId"
                    endDateId="MyDatePickerEndDateId"
                    startDate={ this.props.filters.hfgerminacion }
                    endDate={ this.props.filters.hfcosecha }
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ this.state.calendarFocused }
                    onFocusChange={ this.onFocusChange }
                    numberOfMonths={ 1 }
                    isOutsideRange={ () => false }
                    showClearDates={ true }
                />

            </View >
        );
    }
}



// mapeo
const mapStateToProps = ( state ) =>
{
    return {
        // hfplantacion: getHfPlantacion( state.hfplantacion, state.filters )
        filters: state.filters
    }
}

//const HfHuertoFilter = ( props ) =>

export default connect( mapStateToProps )( HfHuertoFilter );