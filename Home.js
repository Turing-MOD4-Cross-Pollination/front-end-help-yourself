import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NetInfo from '@react-native-community/netinfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ForMeScreen from './components/ForMeScreen/ForMeScreen';
import NearMeScreen from './components/NearMeScreen/NearMeScreen';
import NowScreen from './components/NowScreen/NowScreen';
import { getAllData } from './util/apiCalls';
import { setAllResources, setAllCategories } from './actions';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ForMe: { screen: ForMeScreen },
  NearMe: { screen: NearMeScreen },
  Now: { screen: NowScreen },
});

const AppContainer = createAppContainer(MainNavigator);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.InternetCheck();
  };

  InternetCheck = () => {
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) {
        console.warn('PLEASE CONNECT TO INTERNET');
      } else {
        this.getDataWithConnection();
      }
    });
  };

  getDataWithConnection = async () => {
    let response = await getAllData();
    this.setState({ data: response.data.resources });
    this.props.setAllResources(response.data.resources);
    this.props.setAllCategories(response.data.resources);
  };

  render = () => <AppContainer />;
}

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
