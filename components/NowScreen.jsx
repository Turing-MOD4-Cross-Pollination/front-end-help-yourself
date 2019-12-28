import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Button
} from 'react-native';
import resources from '../data/resources';
import EmergencyItem from './EmergencyItem';
import Footer from './Footer';

const NowScreen = props => {
	const emergencyItems = resources.map((resource, index) => (
		<EmergencyItem key={index} resource={resource} />
	));

	return (
		<>
			<View style={styles.nav}>
				<TouchableOpacity onPress={() => props.navigation.navigate('Now')}>
					<Text>Now</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate('NearMe')}>
					<Text>Near Me</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.header}>Emergency Contacts</Text>
			<ScrollView style={styles.container}>
				{emergencyItems}
				<Footer />
			</ScrollView>
		</>
	);
};

NowScreen.navigationOptions = ({ navigation }) => ({
	title: 'Now',
	headerStyle: {
		backgroundColor: '#0B306F'
	},
	headerTintColor: '#fff',
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
		backgroundColor: '#0B306F'
	},
	header: {
		fontSize: 32,
		paddingBottom: 20,
		paddingTop: 20,
		paddingRight: 15,
		paddingLeft: 15,
		backgroundColor: '#0B306F',
		color: 'white',
		fontWeight: 'bold'
	},
	nav: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 10
	}
});

export default NowScreen;
