import React from 'react';
import { Text, View, Image, Linking, Button } from 'react-native';
import Config from '../../constants/Config';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function InicioScreen({ navigation }){
    return (
        <View style={Estilo.contenedor}>

            <Image source={require('../../assets/images/Cucumber_leaf.png')} style={Estilo.logo} />

            <Text style={Estilo.parrafo}>Huertify es una aplicacion gratuita, de codigo abierto y sin fines de lucro.</Text>

            <Text style={Estilo.parrafo}>Huertify is a free open-source app.</Text>

            <Text style={Estilo.parrafo}>
                La <Enlace texto="Linux Foundation" donde="https://www.linuxfoundation.org/" /> lanzo
                su proyecto <Enlace texto="Ag Stack" donde="https://agstack.org/" />,
                'Open-Source Digital Infrastructure for the Agriculture Ecosystem'.</Text>

            <View style={Estilo.lista}>
                <Text>- Usted tiene su huerto.</Text>
                <Text>- Pero, a veces, olvida cuando regarlo, fertilizarlo, etc...</Text>
                <Text>- <Enlace texto="Huertify" donde={Config.url}  style={Estilo.strong} /> se lo recuerda.</Text>
                <Text>- Administra tus recordatorios de riego, fertilizacion, cochesa y siembra de tu huerto.</Text>
                <Text>- Recibe notificaciones en tu celular! <Text style={Estilo.italic}>(en desarrollo)</Text>.</Text>
                <Text>- Y recuerda, <Enlace texto="Huertify" donde={Config.url} /> te ayuda a administrar tu huerto urbano.</Text>
                <Text>- ...pero quien lo cuida, son tus propias manos.</Text>
            </View>

            <View style={Estilo.InicioEnlaces}>
                <Text style={[Estilo.parrafo, Estilo.strong]}>Pronto en Google Play!</Text>
                <Text style={Estilo.parrafo_mini}><Enlace texto="Linux Foundation" donde="https://www.linuxfoundation.org/" /></Text>
                <Text style={Estilo.parrafo_mini}><Enlace texto="AgStack.org" donde="https://agstack.org/" /></Text>
                <Text style={Estilo.parrafo_mini}><Enlace texto="Wikipedia" donde="https://es.wikipedia.org/wiki/Fundaci%C3%B3n_Linux" /></Text>
                <Text style={Estilo.parrafo_mini}><Enlace texto="Imagen: Wikipedia" donde="https://es.wikipedia.org/wiki/Brote_(bot%C3%A1nica)#/media/Archivo:Cucumber_leaf.jpg" /></Text>
                <Text style={[Estilo.parrafo_mini, Estilo.enlace]} onPress={() => navigation.navigate('LoginScreen') } >Acceso</Text>

                
            </View>

            <FooterHf></FooterHf>

       </View>
    );
}

function Enlace(props){
    return (
        <Text style={Estilo.enlace} onPress={() => Linking.openURL(props.donde)}>{props.texto}</Text>
    );
}

