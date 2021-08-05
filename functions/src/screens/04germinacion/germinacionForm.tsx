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
    };

    onHfTipoChange = ( e ) =>
    {
        const hftipo = e.target.value;
        this.setState( () => ( { hftipo } ) );
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
                        autoFocus />

                    <input
                        type="number"
                        placeholder="hfcantidad"
                        autoFocus />

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