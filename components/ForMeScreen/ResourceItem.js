import {
	StyleSheet,
	Text,
	View,
	Platform,
	Linking,
	TouchableOpacity,
	Button
} from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCategories } from '../../actions';
export const LIST_ITEM_HEIGHT = 250;

const ResourceItem = ({
	resource,
	isLast,
	setSelectedCategories,
	selectedCategories
}) => {
	const bottomRadius = isLast ? 8 : 0;
	let [switchValue, toggleSwitchValue] = useState(
		selectedCategories.includes(resource.name)
	);

	const loadInBrowser = () => {
		Linking.openURL(resource.website).catch(err =>
			console.error("Couldn't load page", err)
		);
	};

	const dialCall = () => {
		let phoneNumber = '';

		if (Platform.OS === 'android') {
			phoneNumber = `tel:${resource.contact}`;
		} else {
			phoneNumber = `telprompt:${resource.contact}`;
		}

		Linking.openURL(phoneNumber);
	};
	const { street, city, state, contact, notes, name } = resource;

	return (
		<View
			style={[
				styles.container,
				{
					borderBottomLeftRadius: bottomRadius,
					borderBottomRightRadius: bottomRadius
				}
			]}>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.description}>{notes}</Text>
			<Text style={styles.description}>{`${street}, ${city}, ${state}`}</Text>
			<TouchableOpacity onPress={dialCall} activeOpacity={0.7}>
				<Text style={{ ...styles.phone, ...styles.description }}>
					{contact}
				</Text>
			</TouchableOpacity>
			<Button title='Visit Website' onPress={loadInBrowser} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f0f0f0',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderColor: '#f4f4f6',
		height: LIST_ITEM_HEIGHT,
		width: '100%',
		borderColor: 'lightgray',
		borderWidth: 0.5,
		borderRadius: 2
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 8
	},
	description: {
		fontSize: 16,
		marginTop: 10
	},
	pointsContainer: {
		borderRadius: 8,
		backgroundColor: '#44c282',
		padding: 8
	},
	points: {
		color: 'white',
		fontWeight: 'bold'
	},
	phone: {
		fontWeight: 'bold',
		color: '#3741FE'
	}
});

export const mapStateToProps = state => ({
	selectedCategories: state.selectedCategories
});

export default connect(mapStateToProps)(ResourceItem);
