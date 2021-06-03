import React from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function LoginScreen(){
    return (
        <View style={Estilo.contenedor}>
            <Text>Huertify.org</Text>
            <Text>Login</Text>

            <TextInput placeholder='demo'></TextInput>

            <FooterHf></FooterHf>
      </View>
    );
}