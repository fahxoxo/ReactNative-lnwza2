import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView from "react-native-maps";
import UserMarkers from "@/components/week10/UserMarkers"; // เช็ค path ให้ถูกต้อง
import { getLocation } from "@/utils/gps"; // เช็ค path ให้ถูกต้อง

export default function LocationQuiz() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const [users, setUsers] = useState([]);
  const [myLocation, setMyLocation] = useState<any>(null);

  // --- ส่วนที่แก้ไข: เปลี่ยน URL API ตรงนี้ ---
  const loadUsers = async () => {
    let url_endpoint = "https://ckartisan.com/api/location"; 
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      setUsers(items);
    } catch (error) {
      console.log(error);
    }
  };

  const onLoad = async () => {
    let loc = await getLocation();
    if (loc) {
      setMyLocation(loc);
    }
  };

  useEffect(() => {
    loadUsers();
    onLoad();
  }, []);

  return (
    <View style={{ flex: 1 }}>
       <View style={{ padding: 10, backgroundColor: "#ffffff" }}>
            <Text>My Location: {myLocation ? `${myLocation.coords.latitude}, ${myLocation.coords.longitude}` : "Waiting..."}</Text>
       </View>

      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: 14.133, 
          longitude: 100.616,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true} 
      >
        <UserMarkers items={users} />
      </MapView>
    </View>
  );
}