import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Footer from './Footer';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Community Connect',
		headerStyle: {
			backgroundColor: '#fff'
		},
		headerTintColor: '#0B306F',
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
							source={require('../assets/logo.png')}
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
								<Text style={{ color: 'white', ...styles.buttonText }}>
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
		backgroundColor: '#0B306F',
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
		height: 160,
		display: 'flex',
		borderWidth: 4,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#d62934',
		borderTopLeftRadius: 12,
		borderBottomWidth: 2,
		borderRightWidth: 2
	},
	buttonNearMe: {
		height: 160,
		width: '100%',
		borderWidth: 4,
		borderColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffdb1c',
		borderTopRightRadius: 12,
		borderBottomWidth: 2,
		borderLeftWidth: 2
	},
	buttonForMe: {
		height: 170,
		borderColor: 'white',
		borderWidth: 4,
		borderTopWidth: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		backgroundColor: '#ffdb1c',
		borderBottomRightRadius: 12,
		borderBottomLeftRadius: 12
	},
	row: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 45,
		fontWeight: '600',
		textAlign: 'center'
	},
	line: {
		width: '83%',
		backgroundColor: 'white',
		height: 4,
		marginBottom: 90
	},
	logoContainer: {
		backgroundColor: 'white',
		width: '100%',
		height: 80,
		marginBottom: 80,
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
		color: '#0B306F',
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
