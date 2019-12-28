import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Footer from './Footer';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Community Connect',
		headerStyle: {
			backgroundColor: '#0B306F'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
	render = () => {
		const { navigate } = this.props.navigation;
		return (
			<>
				<View style={styles.container}>
					<View style={styles.row}>
						<TouchableOpacity
							style={{ width: '50%' }}
							onPress={() => navigate('Now')}>
							<View style={styles.buttonNow} title='This is a button'>
								<Text style={{ color: 'white', ...styles.buttonText }}>
									Now
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ width: '50%' }}
							onPress={() => navigate('NearMe')}>
							<View style={styles.buttonNearMe} title='This is a button'>
								<Text style={styles.buttonText}>Near Me</Text>
							</View>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={{ width: '90%' }}
						onPress={() => navigate('ForMe')}>
						<View style={styles.buttonForMe} title='This is a button'>
							<Text style={styles.buttonText}>For Me</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Footer />
			</>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0B306F',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: '100%'
	},
	buttonNow: {
		height: 130,
		display: 'flex',
		borderWidth: 4,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#C4353E',
		borderTopLeftRadius: 15,
		borderBottomWidth: 2,
		borderRightWidth: 2
	},
	buttonNearMe: {
		height: 130,
		width: '100%',
		borderWidth: 4,
		borderColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFE34E',
		borderTopRightRadius: 15,
		borderBottomWidth: 2,
		borderLeftWidth: 2
	},
	buttonForMe: {
		height: 130,
		borderColor: 'white',
		borderWidth: 4,
		borderTopWidth: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#FFE34E',
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15
	},
	row: {
		flexDirection: 'row',
		width: '90%'
	},
	buttonText: {
		fontSize: 50,
		textAlign: 'center'
	}
});

export default HomeScreen;
