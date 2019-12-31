import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, Image} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import React ,{ Component } from 'react'
import HomeScreen from './components/HomeScreen';
import ForMeScreen from './components/ForMeScreen';
import NearMeScreen from './components/NearMeScreen';
import NowScreen from './components/NowScreen';
import loading from './assets/splash.png'
import rootReducer from './reducers';
import { getAllData } from './util/apiCalls';

const store = createStore(rootReducer, applyMiddleware(logger))


const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	ForMe: { screen: ForMeScreen },
	NearMe: { screen: NearMeScreen },
	Now: { screen: NowScreen }
});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  constructor() {
		super();
    this.state = {
      hasData: false,
			isLoaded: false,
			data:[]
    };
  }
  componentDidMount = () => {
    this.InternetCheck();
  };

  InternetCheck = () => {
			NetInfo.fetch().then(state => {
				if (!state.isConnected) {
					  console.warn('PLEASE CONNECT TO INTERNET');
					} else {
					  this.setState({hasData:true})
						//navigate to page or Call API
						this.getDataWithConnection()
					}
				// console.log("Connection type", state.type);
				// console.log("Is connected?", state.isConnected);
			}); 
  };

	getDataWithConnection = async() => {
		let response = await getAllData();
		this.setState({ data:response.data.resources, isLoaded:true })
	}

  render = () => {
		const { hasData, isLoaded} = this.state;
    if (!hasData || isLoaded) {
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      );
    } else {
      return (
        <>
          <Text>Loading Image</Text>
          <Image source={loading} />
        </>
      );
    }
  };
}

export default App;
