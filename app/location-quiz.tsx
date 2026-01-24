import { getLocation } from "@/utils/gps";
import React, { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import UserMarkers from "../components/week10/UserMarkers";

export default function LocationQuiz() {
    const [location, setLocation] = useState<any>(null);
    const [users, setUsers] = useState([]);
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;

    // 1. ดึงตำแหน่งของตัวเอง
    const onLoad = async () => {
        let loc = await getLocation();
        if (loc) { setLocation(loc); }
    };

    // 2. ดึงข้อมูลพิกัดของคนจาก API
    const loadUsers = async () => {
        let url_endpoint = "https://raw.githubusercontent.com/fahxoxo/ReactNative-lnwza2/refs/heads/master/locaion.json";
        try {
            let response = await fetch(url_endpoint);
            let items = await response.json();
            setUsers(items);
        } catch (error) { console.log(error); }
    };

    useEffect(() => {
        onLoad();
        loadUsers();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {/* ส่วนแสดงค่า Lat/Lon ของเราเองด้านบน */}
            <View style={{ padding: 10, backgroundColor: "#50E3C2" }}>
                <Text style={{ textAlign: 'center' }}>My Location: 
                    {location ? ` ${location.coords.latitude}, ${location.coords.longitude}` : " Loading..."}
                </Text>
            </View>

            {/* ส่วนแผนที่ */}
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: 14.133, // พิกัดกลางโดยประมาณจาก API
                    longitude: 100.616,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation={true} // แสดงตำแหน่งของเราเอง (จุดสีน้ำเงิน)
            >
                {/* แสดงหมุดคนทั้งหมดจาก API */}
                <UserMarkers items={users} />
            </MapView>
        </View>
    );
}