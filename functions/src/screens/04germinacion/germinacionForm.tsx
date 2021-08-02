import React from "react";
import { View, Text } from "react-native";
import HfPlantacion, {
    HFLogin
    , HFCantidad
    , HFPlantacionUbicacion
} from '../../model/hfplantacion'

export default class GerminacionForm extends React.Component
{
    render ()
    {
        return (
            <View>
                <Text>Formulario de Germinacion</Text>
                <form>

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


                </form>
            </View>
        )
    }
}