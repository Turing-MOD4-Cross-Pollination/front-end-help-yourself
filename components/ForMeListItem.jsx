import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';
export const LIST_ITEM_HEIGHT = 54;

export default ForMeListItem = (item, isLast) => {
	const bottomRadius = isLast ? 8 : 0;
	let [switchValue, toggleSwitchValue] = useState(false);
	return (
		<View
			style={[
				styles.container,
				{
					borderBottomLeftRadius: bottomRadius,
					borderBottomRightRadius: bottomRadius
				}
			]}>
			<Text style={styles.name}>{item.name}</Text>
			<Switch
				value={switchValue}
				onValueChange={() => toggleSwitchValue(prev => !prev)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderColor: '#f4f4f6',
		height: LIST_ITEM_HEIGHT,
		width: '100%',
		marginBottom: 4,
		marginTop: 4,
		borderRadius: 10
	},
	name: {
		fontSize: 18
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
