import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import React ,{ Component } from 'react'
import HomeScreen from './components/HomeScreen';
import ForMeScreen from './components/ForMeScreen';
import NearMeScreen from './components/NearMeScreen';
import NowScreen from './components/NowScreen';


import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger))

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	ForMe: { screen: ForMeScreen },
	NearMe: { screen: NearMeScreen },
	Now: { screen: NowScreen }
});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component{
	render = ()=>{
		return(
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
	}
}


export default App;
