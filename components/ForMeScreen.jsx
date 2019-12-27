import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { selectResources } from '../actions';
import Animated, { Easing } from 'react-native-reanimated';
import { bInterpolate, bin, useTimingTransition } from 'react-native-redash';
import ForMeList from './ForMeList';
import categories from '../util/categories';
const { not, interpolate } = Animated;

export const ForMeScreen = props => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => setOpen(prev => !prev)}
      >
        <View style={styles.accordian}>
          <ForMeList list={categories} title='Resources' />
          {/* {list} */}
        </View>
      </TouchableWithoutFeedback>

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

ForMeScreen.navigationOptions = ({ navigation }) => ({
  title: 'For Me',
  headerStyle: {
    backgroundColor: '#0B306F'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerRight: (
    <Button title='Home' onPress={() => navigation.navigate('Home')} />
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%'
  },
  button: {
    height: '40%',
    width: '10%',
    backgroundColor: 'red'
  },
  accordian: {
    alignItems: 'stretch',
    flex: 1
  },
  nav: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10
  }
});


export const mapDispatchToProps = dispatch => (
  bindActionCreators({ selectResources }, dispatch)
)
export const mapStateToProps = ({ selectedResources }) => ({
	selectedResources
})

export default connect(mapStateToProps, mapDispatchToProps)(ForMeScreen)


