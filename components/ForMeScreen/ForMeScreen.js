import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Resource from './Resource';
import ForMeList from './ForMeList';

const ForMeScreen = ({ allCategories, selectedCategories }) => {
  return (
    <>
      <Text style={styles.header}>My Resources</Text>
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback style={styles.container}>
          <View style={styles.accordian}>
            <ForMeList list={allCategories} title="Categories" />
          </View>
        </TouchableWithoutFeedback>
        {selectedCategories &&
          selectedCategories.map((category, index) => {
            return <Resource key={index} categoryName={category} />;
          })}
      </ScrollView>
    </>
  );
};

ForMeScreen.navigationOptions = () => ({
  title: 'For Me',
  headerStyle: {
    backgroundColor: '#003180',
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
    backgroundColor: '#003180',

    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    height: '40%',
    width: '10%',
    backgroundColor: 'red',
  },
  accordian: {
    alignItems: 'stretch',
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    fontSize: 32,
    paddingBottom: 10,
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#003180',
    color: 'white',
    fontWeight: 'bold',
  },
});

export const mapStateToProps = (state) => ({
  allCategories: state.allCategories,
  selectedCategories: state.selectedCategories,
});

export default connect(mapStateToProps)(ForMeScreen);
