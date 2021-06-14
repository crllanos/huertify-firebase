/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import * as React from 'react';
 import { Image, Text/*, ColorSchemeName */ } from 'react-native'; // @todo-001 generar scheme dark
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { Avatar } from "react-native-elements";

 import Colors          from '../constants/Colors';
 
 import BottomTabNavigator from './BottomTabNavigator';
 import NotFoundScreen from '../screens/NotFoundScreen';
 
/*
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
*/
 export default function Navigation() { // { colorScheme }: { colorScheme: ColorSchemeName } // @todo-001 generar scheme dark
   return (
     <NavigationContainer
       /*linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}  // @todo-001 generar scheme dark*/>
       <NavegadorRaiz />
     </NavigationContainer>
   );
 }
 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal
 const Stack = createStackNavigator(); // <RootStackParamList>
 
 function NavegadorRaiz(){
   return (
     <Stack.Navigator 
        // screenOptions={{ headerShown: false }}
        screenOptions={{
          headerTintColor: Colors.tint,
          headerStyle: { backgroundColor: Colors.verde },
        }}    
        >
       <Stack.Screen 
          name="Root" 
          component={BottomTabNavigator}
          options={{ 
            title: 'Huertify.org', /* @todo-003 icono huertify en round */
          }}
          />

       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       
     </Stack.Navigator>
   );
 }
