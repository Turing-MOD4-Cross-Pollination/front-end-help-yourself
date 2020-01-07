import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class NearMeScreen extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      errorMessage: null,
      loaded: false,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        loaded: true,
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
        loaded: true,
      });
    } else {
      // only check the location if it has been granted
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      this.setState({ location, loaded: true, errorMessage: null });
    }
  };

  render() {
    var markers = [
      {
        latitude: 39.750784,
        longitude: -104.996648,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive',
      },
      {
        latitude: 39.75248,
        longitude: -104.99955,
        title: 'Union Station',
        subtitle: 'Saturdays 6pm - 7pm, Health prevention',
      },
    ];

    if (this.state.loaded) {
      if (this.state.errorMessage) {
        return (
          <>
            <Text style={styles.header}>Meetups Near Me</Text>
            <View style={styles.container}>
              <Text>{JSON.stringify(this.state.errorMessage)}</Text>
            </View>
          </>
        );
      } else if (this.state.location) {
        // if we have a location show it
        return (
          <>
            <Text style={styles.header}>Meetups Near Me</Text>
            <MapView
              style={styles.mapStyle}
              showsUserLocation={true}
              region={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              {markers &&
                markers.map((location, index) => {
                  const { latitude, longitude, title, subtitle } = location;
                  return (
                    <MapView.Marker
                      key={index}
                      coordinate={{ latitude, longitude }}
                      title={title}
                      description={subtitle}
                      // onPress={this.onMarkerPress(location)}
                    />
                  );
                })}
            </MapView>
          </>
        );
      }
    } else {
      // if we haven't loaded show a waiting placeholder
      return (
        <>
          <Text style={styles.header}>Meetups Near Me</Text>
          <View style={styles.container}>
            <Text>Waiting...</Text>
          </View>
        </>
      );
    }
  }
}

NearMeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Near Me',
  headerStyle: {
    backgroundColor: '#103675',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: <Button title="Home" onPress={() => navigation.navigate('Home')} />,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  mapStyle: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    fontSize: 32,
    paddingBottom: 15,
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#103675',
    color: 'white',
    fontWeight: 'bold',
  },
});
