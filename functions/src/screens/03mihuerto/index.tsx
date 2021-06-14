import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

import Estilo from '../../constants/Estilo';
import Plantacion, {getPlantaciones} from '../../model/plantacion'


export default function MiHuertoScreen({ navigation }){
    // , { useState, useEffect } from "react";
    // const [ plantacion, setPlantacion ] = useState(Plantacion);
    /* no
    useEffect(() => {
        const planta:Plantacion = {};
        setPlantacion(planta);
    }, []);
    */
    
    /* si
    const setVal = (k, v) => {
        setPlantacion({ ...plantacion, [k]: v });
    };
    */

    return (
    <View style={Estilo.contenedor}>

        <Avatar rounded source={require('../../assets/images/Cucumber_leaf.png')} />
        <Text style={Estilo.h1}>Mi huerto</Text>

        <ScrollView style={Estilo.contenedor}>
            <Button title="Nueva germinacion" 
                onPress={() => {
                    console.log('Tratando de navegar...')
                    navigation.navigate('Root'/* , { // @todo-002 no funciona navegacion entre screens Root
                        screen: 'InicioScreen',
                        params: { user: 'jane' },
                    } */)
                }} />

            {getPlantaciones("param de busqueda").map((planta) => {
                    return (
                    <ListItem
                        key={planta.id}
                        bottomDivider
                        onPress={() => {
                            console.log(planta);
                            //props.navigation.navigate("UserDetailScreen", {
                            //  userId: user.id,
                            //});
                        }}
                        >
                        <ListItem.Chevron />
                        <Avatar
                            source={require('../../assets/images/Cucumber_leaf.png')}
                            rounded
                            />
                        <ListItem.Content>
                            <ListItem.Title>{planta.tipo}</ListItem.Title>
                            <ListItem.Subtitle>Germinacion: jun/12</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    );
                })}

        </ScrollView>
    </View>
  );

}
