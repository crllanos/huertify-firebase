/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import InicioScreen    from '../screens/01inicio/index'
import LoginScreen     from '../screens/02login/index'
import MiHuertoScreen  from '../screens/03mihuerto/index'
import GerminacionScreen  from '../screens/04germinacion/index'

import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme'; // @todo-001 generar scheme dark


import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors.verde }}>

      {/* componente 01InicioScreen */}
      <BottomTab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          title: 'Huertify.org',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
        style={{backgroundColor: Colors.verde}}
      />


      {/* componente 02LoginScreen */}
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />

      {/* componente 03MiHuertoScreen */}
      <BottomTab.Screen
        name="Mi Huerto"
        component={MiHuertoScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />

      {/* componente 04GerminacionScreen */}
      <BottomTab.Screen
        name="Germinacion"
        component={GerminacionScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />


    </BottomTab.Navigator>
  );
}










// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />;
}





// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();
function TabOneNavigator() {
  // const colorScheme = useColorScheme();
  return (
    <TabOneStack.Navigator
    screenOptions={{
      headerTintColor: Colors.tint,
      headerStyle: { backgroundColor: Colors.verde },
    }}    
    >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={
          { headerTitle: 'Huertify.org'
          , cardStyle: { backgroundColor: 'red' } }
        }
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={
          { headerTitle: 'Huertify.org'
          , cardStyle: { backgroundColor: 'white' } }
        }
      />
    </TabTwoStack.Navigator>
  );
}
