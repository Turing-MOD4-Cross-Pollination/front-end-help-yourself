import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NetInfo from '@react-native-community/netinfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, useEffect, useState } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ForMeScreen from './components/ForMeScreen/ForMeScreen';
import NearMeScreen from './components/NearMeScreen/NearMeScreen';
import NowScreen from './components/NowScreen/NowScreen';
import { getAllData, getMeetingData } from './util/apiCalls';
import { setAllResources, setAllCategories, setAllMeetings } from './actions';

export const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ForMe: { screen: ForMeScreen },
  NearMe: { screen: NearMeScreen },
  Now: { screen: NowScreen },
});

const AppContainer = createAppContainer(MainNavigator);

class Home extends Component {

  getDataWithConnection = async () => {
    const { setAllResources, setAllCategories } = this.props;
    const response = await getAllData();
    setAllResources(response.data.resources);
    setAllCategories(response.data.resources);
  };

  getMeetings = async () => {
    const { setAllMeetings } = this.props;
    const response = await getMeetingData();
    setAllMeetings(response.data.recovery);

  };

  componentDidMount() {
    this.internetCheck()
  }

  internetCheck = () => {
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) {
        console.warn('PLEASE CONNECT TO INTERNET');
      } else {
        this.getDataWithConnection();
        this.getMeetings();
      }
    });
  }

  render() { return <AppContainer /> }
};

export const mapStateToProps = (state) => ({
  allResources: state.allResources,
  allMeetings: state.allMeetings,
});

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setAllResources,
      setAllCategories,
      setAllMeetings,
    },
    dispatch,
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
