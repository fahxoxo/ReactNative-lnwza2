import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signIn } from "@/utils/auth";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await signIn(email, password);
      Alert.alert("Login Success", JSON.stringify(data));
      router.navigate("/");
    } catch (error: any) {
      Alert.alert("Login Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        style={{ marginTop: 15, color: "blue" }}
        onPress={() => router.navigate("/register")}
      >
        Register
      </Text>
    </View>
  );
}