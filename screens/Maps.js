import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../config/firebase';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { currentLatitude, currentLongitude } from './LoadMap'

const Maps = ({ navigation, props }) => {
    const [permission, setPermission] = useState();
    const [currentLatitude, setCurrentLatitude] = useState(-29.046185);
    const [currentLongitude, setCurrentLogitude] = useState(25.06288);
    const [medicalLocation, setMedicalLocation] = useState([])








    useEffect(async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
        setPermission(status)
        if (status !== 'granted') {
            console.log('PERMISSION NOT GRANTED')
        }
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLatitude(location.coords.latitude);
        setCurrentLogitude(location.coords.longitude);
        db.collection("MedicalFascilities")
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMedicalLocation(dis)
                console.log(dis)
            });

        
    } )


    function renderPin() {
        return (
            <Marker pinColor='#1597E5' coordinate={{
                latitude: currentLatitude,
                longitude: currentLongitude,
            }}
            >
                <Callout >
                    <Text>I'm here</Text>
                </Callout>
            </Marker>
        )
    }



    return (
        <View style={styles.container}>

            { medicalLocation.length == 0 ?
                <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 400 }} />
                : <MapView style={styles.map}
                    initialRegion={{
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    provider="google">

                    {
                        renderPin()
                    }

                    {
                        medicalLocation.map((medi) => {

                            return (
                                <Marker pinColor='#054EDE' onPress={() => navigation.navigate('FacilityInfo', medi)} coordinate={{
                                    latitude: parseFloat(medi.latitude),
                                    longitude: parseFloat(medi.longitude),
                                }}
                                    key={medi.id}>
                                </Marker>
                            )
                        }

                        )
                    }

                </MapView>}




        </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    map: {
        width: '100%', //Dimensions.get('window').width,
        height: '100%'// Dimensions.get('window').height,
    },
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        alignSelf: 'center',
        color: '#fff',

    },
})
