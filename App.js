import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigationContainer from './src/navigation';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<AppNavigationContainer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d9d9d9'
	},
});
