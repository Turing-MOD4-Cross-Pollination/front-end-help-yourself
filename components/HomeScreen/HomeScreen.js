import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Footer from '../Footer/Footer';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Community Connect',
		headerStyle: {
			backgroundColor: '#fff'
		},
		headerTintColor: '#102b59',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
	render = () => {
		const { navigate } = this.props.navigation;
		return (
			<>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image
							source={require('../../assets/logo.png')}
							style={styles.logoImage}
						/>
						<Text style={styles.logoText}>mmunity</Text>
						<Text style={styles.logoText}>nnect</Text>
					</View>
					<View style={styles.line}></View>
					<View style={styles.row}>
						<TouchableOpacity
							style={{ width: '45%' }}
							onPress={() => navigate('Now')}>
							<View style={styles.buttonNow} title='This is a button'>
								<Text style={{ ...styles.buttonText, color: 'white' }}>
									Now
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ width: '45%' }}
							onPress={() => navigate('NearMe')}>
							<View style={styles.buttonNearMe} title='This is a button'>
								<Text style={styles.buttonText}>Near Me</Text>
							</View>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={{ marginLeft: 37, width: '90%' }}
						onPress={() => navigate('ForMe')}>
						<View style={styles.buttonForMe} title='This is a button'>
							<Text style={{ ...styles.buttonText, fontSize: 60 }}>For Me</Text>
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
		backgroundColor: '#102b59',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: '93%',
		flexDirection: 'column',
		padding: 0,
		margin: 0,
		width: '100%'
	},
	buttonNow: {
		height: 130,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '97%',
		backgroundColor: '#d62934',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 7
	},
	buttonNearMe: {
		height: 130,
		width: '97%',
		marginLeft: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 7
	},
	buttonForMe: {
		height: 130,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		backgroundColor: '#fff',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 7
	},
	row: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	buttonText: {
		fontSize: 45,
		fontWeight: '600',
		textAlign: 'center',
		color: '#102b59'
	},
	line: {
		width: '83%',
		backgroundColor: 'white',
		height: 1.5,
		marginBottom: 98
	},
	logoContainer: {
		backgroundColor: 'white',
		width: '100%',
		height: 80,
		marginBottom: 102,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 8
	},
	logoText: {
		fontSize: 40,
		width: 200,
		marginLeft: 160,
		fontWeight: '700',
		height: 43,
		color: '#102b59',
		letterSpacing: 1.6
	},
	logoImage: {
		height: 140,
		width: 140,
		position: 'absolute',
		alignSelf: 'center',
		top: '-45%',
		right: '56%'
	}
});

export default HomeScreen;
