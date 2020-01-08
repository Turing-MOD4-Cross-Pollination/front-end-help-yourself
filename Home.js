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
import { getAllData } from './util/apiCalls';
import { setAllResources, setAllCategories } from './actions';

export const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ForMe: { screen: ForMeScreen },
  NearMe: { screen: NearMeScreen },
  Now: { screen: NowScreen },
});

const AppContainer = createAppContainer(MainNavigator);

const Home = () => {
  const [data, updateData] = useState([]);

  useEffect(() => {
    const internetCheck = () => {
      NetInfo.fetch().then((state) => {
        if (!state.isConnected) {
          console.warn('PLEASE CONNECT TO INTERNET');
        } else {
          getDataWithConnection();
        }
      });
    };

    internetCheck();
  }, []);

  const getDataWithConnection = async () => {
    const response = await getAllData();
    updateData(response.data.resources);
    setAllResources(response.data.resources);
    setAllCategories(response.data.resources);
  };

  return <AppContainer />;
};

export const mapStateToProps = (state) => ({
  allResources: state.allResources,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setAllResources,
      setAllCategories,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
