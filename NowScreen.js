import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const NowScreen = (props) => {

    return (
      <View style={styles.container}>
        <Text>NOW Me</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ForMe')}>
            <Text>For Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('NearMe')}>
            <Text>Near Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

NowScreen.navigationOptions = ({navigation})=>({
	title: 'Community Connect',
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

export default NowScreen;
