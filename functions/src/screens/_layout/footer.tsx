import React from 'react';
import { Text, View } from 'react-native';
import Estilo from '../../constants/Estilo';

export default function FooterHf(){
    return (
        <View style={Estilo.contenedor_footer}>
            <Text style={Estilo.parrafo}>-</Text>
            <Text style={Estilo.parrafo}><a href='https://twitter.com/huertify'>twitter.com/Huertify</a></Text>
            <Text style={Estilo.parrafo}><i>Huertify.org - 2021</i></Text>
       </View>
    );
}