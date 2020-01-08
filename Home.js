import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NetInfo from '@react-native-community/netinfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
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

const Home = () => {
  const [data, updateData] = useState([]);

  const getDataWithConnection = async () => {
    const response = await getAllData();
    updateData(response.data.resources);
    setAllResources(response.data.resources);
    setAllCategories(response.data.resources);
  };

  const getMeetings = async () => {
    const response = await getMeetingData();
    setAllMeetings(response.data.recovery);
  };

  useEffect(() => {
    const internetCheck = () => {
      NetInfo.fetch().then((state) => {
        if (!state.isConnected) {
          console.warn('PLEASE CONNECT TO INTERNET');
        } else {
          getDataWithConnection();
          getMeetings();
        }
      });
    };

    internetCheck();
  }, []);

  return <AppContainer />;
};

export const mapStateToProps = (state) => ({
  allResources: state.allResources,
  allMeetings: state.allMeetings,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setAllResources,
      setAllCategories,
      setAllMeetings,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
