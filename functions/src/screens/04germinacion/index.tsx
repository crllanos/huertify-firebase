/** 
https://huertify.atlassian.net/browse/HTFY-25
 */
import React from "react";
import { Text, Image, View, TextInput, ScrollView, Button, StyleSheet, Picker } from 'react-native';
import { Avatar } from "react-native-elements";

import Estilo from '../../constants/Estilo';
import Plantacion, {getPlantaciones} from '../../model/plantacion'

export default function GerminacionScreen({ navigation }){

    return (
        <View style={Estilo.contenedor}>
    
            <Avatar rounded source={require('../../assets/images/Cucumber_leaf.png')} />
            <Text style={Estilo.h1}>Germinacion</Text>
    
            <ScrollView>

          {/* Name Input */}
          <View /* style={styles.inputGroup} */>
            <TextInput
              placeholder="Name"
              //onChangeText={(value) => handleChangeText(value, "name")}
              //value={state.name}
            />
          </View>
    
          {/* Email Input */}
          <View /* style={styles.inputGroup} */>
            <TextInput
              placeholder="Email"
              multiline={true}
              numberOfLines={4}
              //onChangeText={(value) => handleChangeText(value, "email")}
              //value={state.email}
            />
          </View>
    
          {/* Input */}
          <View /* style={styles.inputGroup} */>
            <TextInput
              placeholder="phone"
              //onChangeText={(value) => handleChangeText(value, "phone")}
              //value={state.phone}
            />
          </View>
    
          <View /* style={styles.button} */> 
            <Button title="Save User" onPress={() => console.log('saveNewUser()')} />
          </View>
        </ScrollView>
    </View>
      );

};