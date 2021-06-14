import React, { useState } from 'react';
import { Text, Alert, View, TextInput, Button } from 'react-native';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
import { Avatar } from "react-native-elements";

export default function LoginScreen({ navigation }){
    const LoginForm = {
        usuario:"",
        password: ""
    };
    const [estado, setEstado] = useState(LoginForm);
    
    const handleChangeText = (value, name) => {
        setEstado({ ...estado, [name]: value });
    };
    
    // TODO Implementar login Google
    function doLogin(){
        if(estado.usuario === 'demo' || estado.password === 'demo' ){
            console.log('el navigation', navigation);
            
            // HTFY-23 - @todo-002 no funciona navegacion entre screens Root
            //navigation.navigate('MiHuertoScreen');

            // REACT NATIVE ALERT "En construccion"
            // REACT NATIVE ALERT "En construccion"
            // REACT NATIVE ALERT "En construccion"
            // REACT NATIVE ALERT "En construccion"
            // REACT NATIVE ALERT "En construccion"
            // https://reactnative.dev/docs/alert
             

        }else{
            console.log('Login erroneo');
        }
    }
    
    return (
        <View style={Estilo.contenedor}>
            <Avatar rounded source={require('../../assets/images/Cucumber_leaf.png')} />
            <Text style={Estilo.h1}>Login</Text>

            <Text style={Estilo.parrafo}>Usuario</Text>
            <TextInput placeholder="demo" style={Estilo.input} onChangeText={(value) => handleChangeText(value, "usuario")} />

            <Text style={Estilo.parrafo}>Password</Text>
            <TextInput placeholder="demo" secureTextEntry={true} style={Estilo.input} onChangeText={(value) => handleChangeText(value, "password")} />

            {/* poando comments */}
            <View style={Estilo.parrafo}>
                <Button title="Entrar" onPress={() => doLogin()} />
            </View>


            <FooterHf></FooterHf>
      </View>
    );
}

