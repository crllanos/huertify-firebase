import React from 'react';
import { Text, View, Linking } from 'react-native';
import Estilo from '../../constants/Estilo';
import Config from '../../constants/Config';

export default function FooterHf(){
    return (
        <View style={Estilo.contenedor_footer}>
            <Text style={Estilo.parrafo_mini}>-</Text>
            <Text>(*) Nos falta tu planta? Avisanos!</Text>
            <Text style={Estilo.parrafo_mini}><Enlace texto="twitter.com/Huertify" donde={Config.url} /></Text>
            <Text style={[Estilo.parrafo_mini, Estilo.italic]}>Huertify.org - 2021</Text>
       </View>
    );
}


// TODO Pasar a libreria (copiado desde Inicio)
function Enlace(props){
    return (
        <Text style={Estilo.enlace} onPress={() => Linking.openURL(props.donde)}>{props.texto}</Text>
    );
}