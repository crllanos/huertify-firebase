/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName, Text } from 'react-native';

 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return <Text>Navegacion { colorScheme } </Text>;
  {/*
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator>
    </NavigationContainer>
  );
  */}
}
