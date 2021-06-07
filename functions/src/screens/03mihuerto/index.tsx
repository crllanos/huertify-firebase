import React, { useState, useEffect } from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';
//import Plantacion from '../../model/plantacion'

//const [ plantacion, setPlantacion ] = useState(Plantacion);

export default function MiHuertoScreen({ navigation }){
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


/** */
    return (
        <ScrollView style={Estilo.contenedor}>
        {/* plantacion.tipo Input
        <View style={styles.inputGroup}>
            <TextInput
            placeholder="tipo"
            onChangeText={(v) => setVal("tipo", v)}
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            value={plantacion.}ñññññññññññññññññññññññññññññññññññññññññññññññññññññññññññ
            />
        </View>
 */}
        {/* Email Input */}
        <View style={styles.inputGroup}>
            <TextInput
            placeholder="Email"
            multiline={true}
            numberOfLines={4}
            onChangeText={(value) => handleChangeText(value, "email")}
            value={state.email}
            />
        </View>

        {/* Input */}
        <View style={styles.inputGroup}>
            <TextInput
            placeholder="phone"
            onChangeText={(value) => handleChangeText(value, "phone")}
            value={state.phone}
            />
        </View>

        <View style={styles.button}>
            <Button title="Save User" onPress={() => saveNewUser()} />
        </View>
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