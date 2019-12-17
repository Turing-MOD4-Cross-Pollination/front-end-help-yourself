import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ForMeScreen from './ForMeScreen';
import NearMeScreen from './NearMeScreen';
import NowScreen from './NowScreen';

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	ForMe: { screen: ForMeScreen },
	NearMe: { screen: NearMeScreen },
	Now: { screen: NowScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
