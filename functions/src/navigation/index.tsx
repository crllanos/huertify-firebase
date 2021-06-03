/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import * as React from 'react';
 import { ColorSchemeName, Text } from 'react-native';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { slide as Menu } from 'react-burger-menu';
 import InicioScreen from '../screens/InicioScreen'

 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  // linking={LinkingConfiguration}
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavegadorRaiz />
    </NavigationContainer>
  );
}


const NavStack = createStackNavigator();

function NavegadorRaiz() {
  return (
    <NavStack.Navigator>
      <NavStack.Screen name="InicioScreen" component={InicioScreen} />
    </NavStack.Navigator>
  );
}



// coming soon!
function pronto(event){
  event.preventDefault();
  console.log('Pronto!')
}


// Menu burguer
function MiMenu(colorScheme){
  return (
    <Menu>
    <a id="home" className="menu-item" href="/">Inicio { colorScheme }</a>
    <a id="about" className="menu-item" href="/about">Mi huerto</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a onClick={ pronto } className="menu-item--small" href="">Settings</a>
  </Menu>
  );
}

