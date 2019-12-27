import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	ScrollView
} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bInterpolate, useTimingTransition } from 'react-native-redash';
const { not, interpolate } = Animated;
import Chevron from './Chevron';

const EmergencyItem = ({ resource }) => {
	const LIST_ITEM_HEIGHT = 54;
	const [open, setOpen] = useState(false);

	const transition = useTimingTransition(
		open,
		{ duration: 400 },
		Easing.inOut(Easing.ease)
	);

	const height = bInterpolate(transition, 0, LIST_ITEM_HEIGHT * 1);
	const bottomRadius = interpolate(transition, {
		inputRange: [0, 16 / 400],
		outputRange: [8, 0]
	});
	let [switchValue, toggleSwitchValue] = useState(false);
	const itemBottomRadius = switchValue ? 8 : 0;

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
						<Text style={styles.name}>{resource.contact}</Text>
					</View>
				</Animated.View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		backgroundColor: 'white',
		padding: 5,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '100%'
	},
	chevronContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	items: {
		overflow: 'hidden'
	},
	itemContainer: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: '#f4f4f6',
		height: 54
	},
	name: {
		fontSize: 16
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
