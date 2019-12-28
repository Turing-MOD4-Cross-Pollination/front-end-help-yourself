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
			{emergencyItems}
			<View style={styles.nav}>
				<TouchableOpacity onPress={() => props.navigation.navigate('Now')}>
					<Text>Now</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate('NearMe')}>
					<Text>Near Me</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexGrow: 1
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
