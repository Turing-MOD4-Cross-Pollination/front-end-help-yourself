import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bInterpolate, bin, useTimingTransition } from 'react-native-redash';
import Chevron from '../Chevron';
import Item, { LIST_ITEM_HEIGHT } from './ForMeListItem';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { not, interpolate } = Animated;

const Resource = ({ categoryName, allResources }) => {
	const [open, setOpen] = useState(false);
	const transition = useTimingTransition(
		open,
		{ duration: 400 },
		Easing.inOut(Easing.ease)
	);
	const resource = allResources.filter(
		resource => resource.category === categoryName
	);

	const height = bInterpolate(
		transition,
		0,
		LIST_ITEM_HEIGHT * resource.length
	);
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
					<Text style={styles.title}>{categoryName}</Text>
					<Chevron {...{ transition }} />
				</Animated.View>
			</TouchableWithoutFeedback>
			<ScrollView>
				<Animated.View style={[styles.items, { height }]}>
					{resource
						.filter(resource => resource.category === categoryName)
						.map((res, index) => (
							<Item
								key={index}
								name={res.name}
								isLast={index === resource.length - 1}
							/>
						))}
				</Animated.View>
			</ScrollView>
		</>
	);
};
//SWAPPED THE SCROLL VIEW AND THE ANIMATED VIEW PLACEMENT TO THE OUTSIDE.
const styles = StyleSheet.create({
	container: {
		marginTop: 3,
		backgroundColor: 'white',
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 3
		// marginHorizontal: 10
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	items: {
		overflow: 'hidden'
	}
});

export const mapStateToProps = state => ({
	allResources: state.allResources
});

export default connect(mapStateToProps)(Resource);
