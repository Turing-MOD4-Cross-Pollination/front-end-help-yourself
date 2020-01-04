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
						<Text style={styles.logoText}>community</Text>
						<Text style={{ ...styles.logoText, marginTop: -20 }}>connect</Text>
					</View>
					<Text style={styles.colorado}>COLORADO</Text>
					<Text style={styles.summary}>
						Find all resources available and make them your own for fast and
						easy access.
					</Text>
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
							<Text style={{ ...styles.buttonText, fontSize: 44 }}>
								My Resources
							</Text>
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
		borderRadius: 12,
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
		borderRadius: 12,
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
		borderRadius: 12,
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
		backgroundColor: 'darkgray',
		height: 1.5,
		marginBottom: 80
	},
	logoContainer: {
		backgroundColor: 'white',
		width: '100%',
		height: 70,
		marginBottom: 60,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 4
	},
	logoText: {
		fontSize: 40,
		width: 230,
		marginLeft: 160,
		fontWeight: '700',
		height: 50,
		color: '#102b59',
		letterSpacing: -1
	},
	logoImage: {
		height: 140,
		width: 140,
		position: 'absolute',
		alignSelf: 'center',
		top: '-54%',
		right: '61%'
	},
	colorado: {
		fontSize: 28,
		color: 'white',
		marginBottom: 10,
		fontWeight: 'bold'
	},
	summary: {
		color: 'white',
		width: '83%',
		fontSize: 18,
		marginBottom: 40,
		textAlign: 'center',
		opacity: 0.7
	}
});

export default HomeScreen;
