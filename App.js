import React, {Component, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps'
import FriendMarker from "./FriendMarker";
import RecMarker from "./RecMarker";

export default function App() {
    const [region, setRegion] = useState({
        latitude: 33.7872131,
        longitude: -84.381931,
        latitudeDelta: .05,
        longitudeDelta: .05
    });

    return (
        <View style={styles.container}>
            <MapView style={{...StyleSheet.absoluteFillObject}}
                     initialRegion={{
                         latitude: 33.7872131,
                         longitude: -84.381931,
                         latitudeDelta: 50,
                         longitudeDelta: 50
                     }}
                     onRegionChangeComplete={(region) => setRegion(region)}
            >
                <RecMarker />
                <FriendMarker />
            </MapView>
            <Text>Current latitude: {region.latitude}</Text>
            <Text>Current longitude: {region.longitude}</Text>
        </View>
    );

}

//create our styling code:
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
});

