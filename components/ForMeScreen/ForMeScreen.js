import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableWithoutFeedback,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import Animated from 'react-native-reanimated';
import ForMeList from './ForMeList';
import categories from '../../util/categories';
const { not, interpolate } = Animated;

const ForMeScreen = props => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Text style={styles.header}>My Resources</Text>
			<View style={styles.container}>
				<TouchableWithoutFeedback
					style={styles.container}
					onPress={() => setOpen(prev => !prev)}>
					<View style={styles.accordian}>
						<ForMeList list={categories} title='Resources' />
					</View>
				</TouchableWithoutFeedback>
			</View>
		</>
	);
};

ForMeScreen.navigationOptions = ({ navigation }) => ({
	title: 'For Me',
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

		height: '100%',
		paddingLeft: 15,
		paddingRight: 15
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

export default ForMeScreen;
