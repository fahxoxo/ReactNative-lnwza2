import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UserMarkers(props: any) {
  return props.items.map((item: any) => (
    <Marker
      coordinate={{
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
      }}
      // API ของ ckartisan ใช้ key ว่า "user_id"
      title={item.user_id} 
      // API ของ ckartisan ใช้ key ว่า "updated_at"
      description={`Update: ${item.updated_at}`} 
      key={item.id.toString()}
    >
      <FontAwesome name="user" size={20} color="tomato" />
    </Marker>
  ));
}