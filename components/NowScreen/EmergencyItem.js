import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	ScrollView,
	Platform,
	Linking,
	TouchableOpacity
} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bInterpolate, useTimingTransition } from 'react-native-redash';
const { not, interpolate } = Animated;
import Chevron from '../Chevron';

const EmergencyItem = ({ resource }) => {
	const LIST_ITEM_HEIGHT = 60;
	const [open, setOpen] = useState(false);

	const transition = useTimingTransition(
		open,
		{ duration: 250 },
		Easing.inOut(Easing.ease)
	);

	const height = bInterpolate(transition, 0, LIST_ITEM_HEIGHT * 1);
	const bottomRadius = interpolate(transition, {
		inputRange: [0, 16 / 400],
		outputRange: [8, 0]
	});
	let [switchValue, toggleSwitchValue] = useState(false);
	const itemBottomRadius = switchValue ? 8 : 0;

	dialCall = () => {
		let phoneNumber = '';

		if (Platform.OS === 'android') {
			phoneNumber = `tel:${resource.contact}`;
		} else {
			phoneNumber = `telprompt:${resource.contact}`;
		}

		Linking.openURL(phoneNumber);
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
				<Animated.View
					style={[
						styles.chevronContainer,
						{
							borderBottomLeftRadius: bottomRadius,
							borderBottomRightRadius: bottomRadius
						}
					]}>
					<Text style={styles.title}>{resource.name}</Text>
					<Chevron {...{ transition }} />
				</Animated.View>
			</TouchableWithoutFeedback>
			<ScrollView>
				<Animated.View style={[styles.items, { height }]}>
					<View
						style={[
							styles.itemContainer,
							{
								borderBottomLeftRadius: itemBottomRadius,
								borderBottomRightRadius: itemBottomRadius
							}
						]}>
						<TouchableOpacity onPress={this.dialCall} activeOpacity={0.7}>
							<Text style={styles.name}>{resource.contact}</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		marginBottom: 5,
		borderTopWidth: 1,
		borderColor: 'lightgray',
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 8,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 15,
		marginLeft: 15,
		marginRight: 15
	},
	chevronContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 6,
		width: '85%',
		paddingBottom: 6
	},
	items: {
		overflow: 'hidden'
	},
	itemContainer: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 10,
		borderTopWidth: 2,
		width: 250,
		paddingHorizontal: 0,
		borderColor: '#f4f4f6',
		height: 55
	},
	name: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#C4353E'
	},
	pointsContainer: {
		borderRadius: 8,
		backgroundColor: '#44c282',
		padding: 8
	},
	points: {
		color: 'white',
		fontWeight: 'bold'
	}
});

export default EmergencyItem;
