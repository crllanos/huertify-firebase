import React, { useState, useEffect } from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

import Estilo from '../../constants/Estilo';
// import FooterHf from '../_layout/footer';
//import Plantacion from '../../model/plantacion'


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

    const plantaciones = [{ // :Plantacion
            id : 1
            , login : {}
            , tipo : "Tomate"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada  : true
            , geo : {}
        },
        {
            id : 0
          , login : {}
          , tipo : "Cannabis"
          , cantidad : 0
          , codigo : ""
          , cruzamiento : ""
          , seleccionada : true
          , geo : {}
        }];



/** */
    return (
        <ScrollView style={Estilo.contenedor}>
            <Button title="Nueva germinacion" />

            {plantaciones.map((planta) => {
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
                    <ListItem.Subtitle>Germinacion: {planta.fec_germina}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                );
            })}
        </ScrollView>
  );
/** */

    
}

// TODO Llevar a Estilo
const styles = StyleSheet.create({
inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  }
});