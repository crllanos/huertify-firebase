import React, { useState, useEffect } from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

import Estilo from '../../constants/Estilo';
// import FooterHf from '../_layout/footer';
import Plantacion, {getPlantaciones} from '../../model/plantacion'


export default function MiHuertoScreen({ navigation }){
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
        <ScrollView style={Estilo.contenedor}>
            <Button title="Nueva germinacion" 
                onPress={() => {
                    console.log('Tratando de navegar...')
                    navigation.navigate('Root'/* , {
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
  );

}
