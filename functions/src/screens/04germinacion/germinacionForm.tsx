import React from "react";
import { View, Text } from "react-native";
import HfPlantacion, {
    HFLogin
    , HFCantidad
    , HFPlantacionUbicacion
} from '../../model/hfplantacion'


import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log( 'now', now );
console.log( 'now', now.format( "MMM Do, YYYY" ) ); // https://momentjs.com/docs/#/displaying/format/


export default class GerminacionForm extends React.Component
{

    constructor( props )
    {
        super( props );

        this.state = {
            hftipo: props.hfplantacion ? props.hfplantacion.hftipo : ''
            , hfcantidad: props.hfplantacion ? ( props.hfplantacion.hfcantidad * 1 ).toString() : ''
            , hfgerminacion: props.hfplantacion ? moment( props.hfplantacion.hfgerminacion ) : moment()
            , focused: false
            , error: ''
        }

    }


    onHfTipoChange = ( e ) =>
    {
        const hftipo = e.target.value;
        this.setState( () => ( { hftipo } ) );
    }
    onHfCantidadChange = ( e ) =>
    {
        const hfcantidad = e.target.value;
        console.log( 'hfcantidad', hfcantidad );

        // https://www.regex101.com
        // RARO, al colocar texto, React deja el estado en blanco, el value no funciona como en el tutorial. Buscar alternativas
        if ( hfcantidad && hfcantidad.match( /^\d{1,}(\.\d{0,2})?$/ ) )
        {
            this.setState( () => ( { hfcantidad } ) );
        }
    }
    onHfGerminacionChange = ( hfgerminacion ) =>
    {
        if ( hfgerminacion )
        {
            this.setState( () => ( { hfgerminacion } ) );
        }
    }
    onHfGerminacionFocusChange = ( focused ) =>
    {
        console.log( 'hfgerminacionfoco', focused );

        this.setState( () => ( focused ) );
    }

    onSubmit = ( e ) =>
    {
        console.log( 'pasa por onSubmit', e );
        e.preventDefault();
        if ( !this.state.hftipo || !this.state.hfcantidad )
        {
            console.log( 'Ingrese Tipo y Cantidad' );
            this.setState( () => ( { error: 'ATENCION: Ingrese Tipo y Cantidad' } ) );
        } else
        {
            console.log( 'pasa por onSubmit todo ok' );
            this.setState( () => ( { error: '' } ) );
            this.props.onSubmit( {
                hftipo: this.state.hftipo
                , hfcantidad: parseInt( this.state.hfcantidad )
                , hfgerminacion: this.state.hfgerminacion.valueOf()
            } );
        }
    }


    render ()
    {
        return (
            <View>
                <Text>Formulario de Germinacion</Text>
                <form onSubmit={ this.onSubmit }>
                    { this.state.error && <Text>{ this.state.error }</Text> }

                    <input
                        type="text"
                        placeholder="hftipo"
                        value={ this.state.hftipo }
                        onChange={ this.onHfTipoChange }
                        autoFocus
                    />

                    <input
                        type="number"
                        placeholder="hfcantidad"
                        value={ this.state.hfcantidad }
                        onChange={ this.onHfCantidadChange }
                    />
                    <SingleDatePicker
                        date={ this.state.hfgerminacion } // momentPropTypes.momentObj or null
                        onDateChange={ this.onHfGerminacionChange } // PropTypes.func.isRequired
                        focused={ this.state.focused } //  PropTypes.bool
                        onFocusChange={ this.onHfGerminacionFocusChange } // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                        numberOfMonths={ 1 }
                        isOutsideRange={ () => false }
                    />
                    <textarea
                        placeholder="hflogin">
                    </textarea>

                    <button type="submit">Agregar plantación</button>


                    {/**
                     *
                     * PENDIENTE este merge de los inputs
                     * PENDIENTE este merge de los inputs
                     * PENDIENTE este merge de los inputs
                     * https://huertify.atlassian.net/browse/HTFY-60
                     *
                    <HFLogin
                        hflogin={ planta.hflogin }
                        onChangeText={ ( v ) => guardaPlanta( 'hflogin', v ) }
                    />

                    <HfTipo
                        hftipo={ planta.hftipo }
                        onChangeValue={ ( v ) => guardaPlanta( 'hftipo', v ) }
                    />

                    <HFCantidad
                        hfcantidad={ planta.hfcantidad }
                        onChangeText={ ( v ) => guardaPlanta( 'hfcantidad', v ) }
                    />
                     */}

                </form>
            </View>
        )
    }
}