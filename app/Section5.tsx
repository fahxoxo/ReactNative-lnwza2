import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import MyIcon from './MyIcon'; 
// อย่าลืม import MyIcon ที่เราเคยทำไว้นะครับ ถ้าไม่มีให้ใช้ Code ด้านล่างแทนได้เลย

export default function Section5() {
    return (
        <View style={{ flexDirection : "row", marginTop : 10, marginBottom : 10, padding : 10  }}>
             <MyIcon title="wifi" name="wifi" size={30} color="gray" />
             <MyIcon title="coffee" name="coffee" size={30} color="gray" />
             <MyIcon title="bath" name="bath" size={30} color="gray" />
             <MyIcon title="car" name="car" size={30} color="gray" />
             <MyIcon title="paw" name="paw" size={30} color="gray" />
        </View>    
    );
}