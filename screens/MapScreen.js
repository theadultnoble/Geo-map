import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const [errMsg, setErrMsg] = useState(null);
  const [location, setLocation] = useState(null);

  const requestLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrMsg("Permission denied");

      return;
    } else if (status == "granted") {
      setErrMsg("Permission granted");
      let devicelocation = await Location.getCurrentPositionAsync({});
      setLocation(devicelocation);
      return;
    }
  };
  useEffect(() => {
    requestLocation();
  }, []);

  let text = "requesting permission!";
  if (errMsg) {
    text = errMsg;
  }

  let deviceLattitude = location.coords.latitude;
  let deviceLongitude = location.coords.longitude;

  console.log(location);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <MapView
        initialRegion={{
          latitude: deviceLattitude,
          longitude: deviceLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {/* <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        /> */}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
