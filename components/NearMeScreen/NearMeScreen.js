import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const NearMeScreen = () => {
  const [location, updateLocation] = useState(null);
  const [errorMessage, updateError] = useState(null);
  const [loaded, updateLoaded] = useState(false);

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      updateError('Permission to access location was denied');
      updateLoaded(true);
    } else {
      const newLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      updateLocation(newLocation);
      updateLoaded(true);
      updateError(null);
    }
  };

  useEffect(() => {
    const checkDevice = () => {
      if (Platform.OS === 'android') {
        updateError(
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        );
        updateLoaded(true);
      } else {
        getLocationAsync();
      }
    };

    checkDevice();
  }, []);

  const markers = [
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

  if (loaded) {
    if (errorMessage) {
      return (
        <>
          <Text style={styles.header}>Meetups Near Me</Text>
          <View style={styles.container}>
            <Text>{JSON.stringify(errorMessage)}</Text>
          </View>
        </>
      );
    }
    if (location) {
      // if we have a location show it
      return (
        <>
          <Text style={styles.header}>Meetups Near Me</Text>
          <MapView
            style={styles.mapStyle}
            showsUserLocation
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            {markers &&
              markers.map((location, index) => {
                const { latitude, longitude, title, subtitle } = location;
                return (
                  <MapView.Marker
                    key={latitude}
                    coordinate={{ latitude, longitude }}
                    title={title}
                    description={subtitle}
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
};

NearMeScreen.navigationOptions = () => ({
  title: 'Near Me',
  headerStyle: {
    backgroundColor: '#003180',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
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
    backgroundColor: '#003180',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NearMeScreen;
