import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import resources from '../../data/resources';
import EmergencyItem from './EmergencyItem';
import Footer from '../Footer/Footer';

const NowScreen = (props) => {
  const emergencyItems = resources.map((resource, index) => (
    <EmergencyItem key={index} resource={resource} />
  ));

  return (
    <>
      <Text style={styles.header}>Emergency Contacts</Text>
      <ScrollView style={styles.container}>
        {emergencyItems}
        <Footer />
      </ScrollView>
    </>
  );
};

NowScreen.navigationOptions = ({ navigation }) => ({
  title: 'Now',
  headerStyle: {
    backgroundColor: '#103675',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103675',
  },
  header: {
    fontSize: 32,
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#103675',
    color: 'white',
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default NowScreen;
