import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Maps from './Maps';

const LoadMap = ({ navigation }) => {
  const [permission, setPermission] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLogitude] = useState();
  const [medicalLocation, setMedicalLocation] = useState([])
  const current = {
    locaionLon: currentLongitude,
    loactionLat: currentLatitude
  }


  useEffect(async() => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    setPermission(status)
    if (status !== 'granted') {
      console.log('PERMISSION NOT GRANTED')
    }
    const location = await Location.getCurrentPositionAsync();
    setCurrentLatitude(location.coords.latitude);
    setCurrentLogitude(location.coords.longitude);

    db.collection("MedicalFascilities")
      .onSnapshot((snapshot) => {
        const dis = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMedicalLocation(dis)
      });
  })

  setTimeout(function () {

    navigation.navigate('Maps',current)
  }, 4000)

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );

}
export default LoadMap
export const currentLongitude = currentLongitude;
export const currentLatitude = currentLongitude;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

