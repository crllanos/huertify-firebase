import React from "react";
import { View, Text } from "react-native";
import HfPlantacion, {
    HFLogin
    , HFCantidad
    , HFPlantacionUbicacion
} from '../../model/hfplantacion'

export default class GerminacionForm extends React.Component
{

    state = {
        hftipo: 'Durazno'
        , hfcantidad: 12
    };

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
        if ( hfcantidad.match( /^\d*(\.\d{0,2})?$/ ) )
        {
            this.setState( () => ( { hfcantidad } ) );
        }
    }



    render ()
    {
        return (
            <View>
                <Text>Formulario de Germinacion</Text>
                <form>

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

                    <textarea
                        placeholder="hflogin">
                    </textarea>

                    <button>Agregar plantación</button>


                    {/**
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