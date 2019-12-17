import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NearMeScreen = () => {
	const { navigate } = this.props.navigation;
	return (
		<View style={styles.container}>
			<Text>Near Me</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		height: '40%',
		width: '10%',
		backgroundColor: 'red'
	}
});

export default NearMeScreen;
