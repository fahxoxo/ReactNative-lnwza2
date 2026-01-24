import React from "react";
import { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UserMarkers(props: any) {
    return props.items.map((item: any) => (
        <Marker
            coordinate={{
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
            }}
            title={item.user_id} // แสดงชื่อเมื่อคลิก
            key={item.id.toString()}
            description={`Last update: ${item.updated_at}`}
        >
            <FontAwesome name="user" size={25} color="dodgerblue" />
        </Marker>
    ));
}