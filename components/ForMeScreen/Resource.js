import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bInterpolate, bin, useTimingTransition } from 'react-native-redash';
import Chevron from '../Chevron';
import Item, { LIST_ITEM_HEIGHT } from './ForMeListItem';
import { ScrollView } from 'react-native-gesture-handler';

const { not, interpolate } = Animated;

export default Resource = ({ list, title }) => {
	const [open, setOpen] = useState(false);
	const transition = useTimingTransition(
		open,
		{ duration: 400 },
		Easing.inOut(Easing.ease)
	);

	const height = bInterpolate(transition, 0, LIST_ITEM_HEIGHT * list.length);
	const bottomRadius = interpolate(transition, {
		inputRange: [0, 16 / 400],
		outputRange: [8, 0]
	});
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
				<Animated.View
					style={[
						styles.container,
						{
							borderBottomLeftRadius: bottomRadius,
							borderBottomRightRadius: bottomRadius
						}
					]}>
					<Text style={styles.title}>{title}</Text>
					<Chevron {...{ transition }} />
				</Animated.View>
			</TouchableWithoutFeedback>
			<ScrollView>
				<Animated.View style={[styles.items, { height }]}>
					{list.map((name, index) => (
						<Item key={index} name={name} isLast={index === list.length - 1} />
					))}
				</Animated.View>
			</ScrollView>
		</>
	);
};
//SWAPPED THE SCROLL VIEW AND THE ANIMATED VIEW PLACEMENT TO THE OUTSIDE.
const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 12
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	items: {
		overflow: 'hidden'
	}
});
