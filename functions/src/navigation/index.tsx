/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
// import { ColorSchemeName } from 'react-native'; // @todo-001 generar scheme dark
 
 import NotFoundScreen from '../screens/NotFoundScreen';
 import { RootStackParamList } from '../types';
 import BottomTabNavigator from './BottomTabNavigator';
 import LinkingConfiguration from './LinkingConfiguration';
 
 export default function Navigation() { // { colorScheme }: { colorScheme: ColorSchemeName } // @todo-001 generar scheme dark
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       /*theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}  // @todo-001 generar scheme dark*/>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal
 const Stack = createStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Root" component={BottomTabNavigator} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
