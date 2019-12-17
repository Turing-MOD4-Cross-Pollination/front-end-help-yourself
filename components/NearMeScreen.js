import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const NearMeScreen = ({navigation}) => {

	return (
		<View style={styles.container}>
			<Text>Near Me!</Text>
			<View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('ForMe')}>
            <Text>For Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Now')}>
            <Text>Now</Text>
          </TouchableOpacity>
        </View>
		</View>
	);
};

NearMeScreen.navigationOptions = ({navigation})=> ({
	title: 'Near Me',
	headerStyle: {
		backgroundColor: '#0B306F'
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold'
	},
	headerRight: <Button title='Home' onPress={()=>navigation.navigate('Home')}/>
});



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	button: {
		height: '40%',
		width: '10%',
		backgroundColor: 'red'
	},
	nav:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-between',
		padding:10
	}
});

export default NearMeScreen;
