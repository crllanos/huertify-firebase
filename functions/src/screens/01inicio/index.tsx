import React from 'react';
import { Text, View, Image } from 'react-native';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';

export default function InicioScreen(){
    return (
        <View style={Estilo.contenedor}>

            <Image source={require('../../assets/images/Cucumber_leaf.png')} style={Estilo.logo}></Image>

            <Text style={Estilo.parrafo}>Huertify es una aplicacion gratuita, de codigo abierto y sin fines de lucro.</Text>

            <Text style={Estilo.parrafo}>Huertify is a free open-source app.</Text>

            <Text style={Estilo.parrafo}>
                The <a href="https://www.linuxfoundation.org/">Linux Foundation</a> 
                released the <a href="https://agstack.org/">Ag Stack</a> project,
                an 'Open-Source Digital Infrastructure for the Agriculture Ecosystem'.</Text>
            <Text>[ <a href="/02login/">Login</a> ]</Text>

            <ul>
                <li><Text>You have your orchard (in spanish: huerto).</Text></li>
                <li><Text>But sometimes, you forget to water it, when to fertilize, etc...</Text></li>
                <li><Text><strong><a href="http://www.huertify.cl">Huertify</a></strong> reminds you.</Text></li>
                <li><Text>Manage your watering reminders, fertilization periods, harvest and planting of your garden.</Text></li>
                <li><Text>Receive notifications on your cell phone! <i>(work in progress)</i>.</Text></li>
                <li><Text>And remember, <a href="http://www.Huertify.cl">Huertify</a> helps you in the administration of your urban garden.</Text></li>
                <li><Text>...but who takes care of it, are your own hands.</Text></li>
            </ul>


            <Text style={Estilo.parrafo}><strong>Soon on Google Play!</strong></Text>

            <Text style={Estilo.parrafo_mini}><a href="https://www.linuxfoundation.org/">Linux Foundation</a></Text>
            <Text style={Estilo.parrafo_mini}><a href="https://agstack.org/">AgStack.org</a></Text>
            <Text style={Estilo.parrafo_mini}><a href="https://es.wikipedia.org/wiki/Fundaci%C3%B3n_Linux">Wikipedia</a></Text>
            <Text style={Estilo.parrafo_mini}><i><a href="https://es.wikipedia.org/wiki/Brote_(bot%C3%A1nica)#/media/Archivo:Cucumber_leaf.jpg">Imagen: Wikipedia</a></i></Text>

            <Text style={Estilo.parrafo_mini}><a href="000.login/">Acceso</a></Text>

            <FooterHf></FooterHf>

       </View>
    );
}