import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const NearMeScreen = ({ navigation }) => {
	return (
		<>
			<Text style={styles.header}>Near Me</Text>
			<View style={styles.container}></View>
		</>
	);
};

NearMeScreen.navigationOptions = ({ navigation }) => ({
	title: 'Near Me',
	headerStyle: {
		backgroundColor: '#fff'
	},
	headerTintColor: '#102b59',
	headerTitleStyle: {
		fontWeight: 'bold'
	},
	headerRight: (
		<Button title='Home' onPress={() => navigation.navigate('Home')} />
	)
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#102b59',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	button: {
		height: '40%',
		width: '10%',
		backgroundColor: 'red'
	},
	nav: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 10
	},
	header: {
		fontSize: 32,
		paddingBottom: 10,
		paddingTop: 20,
		paddingRight: 15,
		paddingLeft: 15,
		backgroundColor: '#102b59',
		color: 'white',
		fontWeight: 'bold'
	}
});

export default NearMeScreen;
