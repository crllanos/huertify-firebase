import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet } from 'react-native';

//import useCachedResources   from './hooks/useCachedResources';
//import useColorScheme       from './hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
	return (
		<SafeAreaProvider>
			<Navigation /* colorScheme={colorScheme}  // @todo-001 generar scheme dark */ />
			<StatusBar />
		</SafeAreaProvider>
	);
}
