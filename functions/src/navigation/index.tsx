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
 import InicioScreen from '../screens/01inicio/index'
 import LoginScreen from '../screens/02login/index'
 
 /////////////////////
 // Navegación
 const NavStack = createStackNavigator();
 function NavegadorRaiz() {
   return (
     <NavStack.Navigator>
       <NavStack.Screen name="Huertify.org" component={InicioScreen} />
       <NavStack.Screen name="Huertify.org | login" component={LoginScreen} />
     </NavStack.Navigator>
   );
 }

 // Contenedor de navegación
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  // <NavigationContainer linking={LinkingConfiguration}
  // <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
  return (
    <NavigationContainer>
      <NavegadorRaiz />
    </NavigationContainer>
  );
}





// coming soon!
function pronto(event){
  event.preventDefault();
  console.log('Pronto!')
}


// TODO
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

