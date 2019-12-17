import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ForMeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>For Me</Text>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Now')}>
          <Text>Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('NearMe')}>
          <Text>Near Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ForMeScreen.navigationOptions = ({navigation})=>({
	title: 'For Me',
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
		justifyContent: 'space-between',
		height:'100%'
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

export default ForMeScreen;
