import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, Image } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ForMeScreen from './components/ForMeScreen/ForMeScreen';
import NearMeScreen from './components/NearMeScreen/NearMeScreen';
import NowScreen from './components/NowScreen/NowScreen';
import loading from './assets/splash.png';
import { getAllData } from './util/apiCalls';
import { setAllResources } from './actions';

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	ForMe: { screen: ForMeScreen },
	NearMe: { screen: NearMeScreen },
	Now: { screen: NowScreen }
});

const AppContainer = createAppContainer(MainNavigator);

class Home extends Component {
	constructor() {
		super();
		this.state = {
			hasData: false,
			isLoaded: false,
			data: []
		};
	}
	// componentDidMount = () => {
	// 	this.InternetCheck();
	// };

	InternetCheck = () => {
		NetInfo.fetch().then(state => {
			if (!state.isConnected) {
				console.warn('PLEASE CONNECT TO INTERNET');
			} else {
				this.setState({ hasData: true });
				//navigate to page or Call API
				this.getDataWithConnection();
			}
		});
	};

	getDataWithConnection = async () => {
		let response = await getAllData();
		this.setState({ data: response.data.resources, isLoaded: true });
	};

	render = () => {
		const { hasData, isLoaded } = this.state;
		if (!hasData || isLoaded) {
			return <AppContainer />;
		} else {
			return (
				<>
					<Text>Loading Image</Text>
					<Text>Loading Image</Text>
					<Text>Loading Image</Text>
					<Text>Loading Image</Text>
					<Text>Loading Image</Text>
					<Text>Loading Image</Text>
					<Text>Loading Image</Text>
					<Image source={loading} />
				</>
			);
		}
	};
}

export const mapStateToProps = state => ({
	allResources: state.allResources
});

export const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setAllResources
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
