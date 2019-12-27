import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import resources from '../data/resources';
import EmergencyItem from './EmergencyItem';

const NowScreen = props => {
	const emergencyItems = resources.map((resource, index) => (
		<EmergencyItem key={index} resource={resource} />
	));

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.header}>Emergency Contacts</Text>
			{emergencyItems}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingBottom: 200,
		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20
	},
	header: {
		fontSize: 30,
		marginBottom: 30
	},
	button: {
		height: '40%',
		width: '10%',
		backgroundColor: 'red'
	},
	accordian: {
		alignItems: 'stretch',
		flex: 1
	},
	nav: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 10
	}
});

export default NowScreen;
