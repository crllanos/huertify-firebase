/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import * as React from 'react';
 import { ColorSchemeName, Image, Text } from 'react-native';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { slide as Menu } from 'react-burger-menu';
 import InicioScreen from '../screens/01inicio/index'
 import LoginScreen from '../screens/02login/index'
 import MiHuertoScreen from '../screens/03mihuerto/index'
 import Colors from '../constants/Colors';

 /////////////////////
 // Navegación
 const NavStack = createStackNavigator();
 function NavegadorRaiz() {
   return (
     <NavStack.Navigator
      screenOptions={{
        headerTintColor: Colors.tint,
        headerStyle: { backgroundColor: Colors.verde },
      }}    
     >


       {/* componente 03MiHuertoScreen */}
       <NavStack.Screen 
          name="MiHuertoScreen" 
          component={MiHuertoScreen}
          options={{
            title: 'Huertify.org | mi huerto',
          }} />


       {/* componente 01InicioScreen */}
       <NavStack.Screen 
          name="InicioScreen" 
          component={InicioScreen}
          options={{ 
            title: 'Huertify.org',
            headerBackImage: () => <Image source={require('../assets/images/Cucumber_leaf.png')} width={25} height={25} /> 
          }}
          />

       {/* componente 02LoginScreen */}
       <NavStack.Screen 
          name="LoginScreen" 
          component={LoginScreen}
          options={{
            title: 'Huertify.org | login',
          }} />
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

