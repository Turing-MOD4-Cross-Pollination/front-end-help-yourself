import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>COMMUNITY CONNECT © 2020</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#003180',
		width: '100%',
		height: 60,
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontSize: 14,
		marginTop: 15,
		fontWeight: 'bold'
	}
});

export default Footer;
