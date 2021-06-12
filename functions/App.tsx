import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet } from 'react-native';
//import { slide as Menu } from "react-burger-menu";


//import useCachedResources   from './hooks/useCachedResources';
//import useColorScheme       from './hooks/useColorScheme';
import Navigation           from './src/navigation';

// import "./burger.css";
export default function App() {
/*   
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", 'true');
    }
  }, []);

 */

  return (
    <SafeAreaProvider>
      <Navigation /* colorScheme={colorScheme}  // @todo-001 generar scheme dark */ />
      <StatusBar />
    </SafeAreaProvider>
  );
}






/* 
const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", 'false')
    : menuWrap.setAttribute("aria-hidden", 'true');
};
const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <Text> Home </Text>
      <Text> About </Text>
      <Text> Contact </Text>
    </Menu>
  );
};
 */









const styles = StyleSheet.create({
  /*
  bm-burger-button: {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  
  .bm-burger-bars: {
    backgroundColor: "#000";
  }
  */
  
  /* .bm-menu-wrap {
    visibility: hidden;
  }
  
  .bm-menu-wrap.open {
    visibility: visible;
  } */
/*  
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
  .bm-cross {
    background: #bdc3c7;
  }
  
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  .bm-item-list {
    padding: 0.8em;
  }
  
  .bm-item {
    display: block;
    color: #bdc3c7;
  }*/
});