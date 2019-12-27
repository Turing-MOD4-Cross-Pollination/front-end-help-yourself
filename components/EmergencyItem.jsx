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

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
				<Animated.View
					style={[
						styles.container,
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
				<Animated.View style={[styles.items, { height }]}></Animated.View>
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	items: {
		overflow: 'hidden'
	}
});

export default EmergencyItem;
