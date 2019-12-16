import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Comunity Connect',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>Placeholder Text</Text>
        <Button
          style={styles.button}
          title="This is a button"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:'40%',
    width:'10%',
    backgroundColor:'red'
  }
});

export default HomeScreen;