import React from 'react';
import { Text, View, Image } from 'react-native';
import Config from '../../constants/Config';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function InicioScreen(){
    return (
        <View style={Estilo.contenedor}>

            <Image source={require('../../assets/images/Cucumber_leaf.png')} style={Estilo.logo}></Image>

            <Text style={Estilo.parrafo}>Huertify es una aplicacion gratuita, de codigo abierto y sin fines de lucro.</Text>

            <Text style={Estilo.parrafo}>Huertify is a free open-source app.</Text>

            <Text style={Estilo.parrafo}>
                La <a href="https://www.linuxfoundation.org/">Linux Foundation</a> lanzo
                su proyecto <a href="https://agstack.org/">Ag Stack</a>,
                'Open-Source Digital Infrastructure for the Agriculture Ecosystem'.</Text>

            <ul>
                <li><Text>Usted tiene su huerto.</Text></li>
                <li><Text>Pero, a veces, olvida cuando regarlo, fertilizarlo, etc...</Text></li>
                <li><Text><strong><a href={Config.url}>Huertify</a></strong> se lo recuerda.</Text></li>
                <li><Text>Administra tus recordatorios de riego, fertilizacion, cochesa y siembra de tu huerto.</Text></li>
                <li><Text>Recibe notificaciones en tu celular! <i>(en desarrollo)</i>.</Text></li>
                <li><Text>Y recuerda, <a href={Config.url}>Huertify</a> te ayuda a administrar tu huerto urbano.</Text></li>
                <li><Text>...pero quien lo cuida, son tus propias manos.</Text></li>
            </ul>


            <Text style={Estilo.parrafo}><strong>Pronto en Google Play!</strong></Text>

            <Text style={Estilo.parrafo_mini}><a href="https://www.linuxfoundation.org/">Linux Foundation</a></Text>
            <Text style={Estilo.parrafo_mini}><a href="https://agstack.org/">AgStack.org</a></Text>
            <Text style={Estilo.parrafo_mini}><a href="https://es.wikipedia.org/wiki/Fundaci%C3%B3n_Linux">Wikipedia</a></Text>
            <Text style={Estilo.parrafo_mini}><i><a href="https://es.wikipedia.org/wiki/Brote_(bot%C3%A1nica)#/media/Archivo:Cucumber_leaf.jpg">Imagen: Wikipedia</a></i></Text>

            <Text style={Estilo.parrafo_mini}><a href="02login/">Acceso</a></Text>

            <FooterHf></FooterHf>

       </View>
    );
}