import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function TestComponent() {
    return (
        <ScrollView style={{ margin: 20 }} >
            <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Please enter your email"
                returnKeyType="next"
                onChangeText={(text) => { }}
                defaultValue="Default text"
            />
            <Button
                title="Press me"
                onPress={() => Alert.alert("Simple Button pressed")}
                color="#665544"
            />
            <Text> Hello World </Text>

            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'gray' }}>
                    <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

            </View>

            <FontAwesome name="heart" size={32} color="orange" />
            <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: "white" }}>หัวใจ</Text>
            </View>




        </ScrollView>
    );
}


