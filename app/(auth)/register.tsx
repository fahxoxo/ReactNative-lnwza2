import { signUp } from "@/utils/auth";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const data = await signUp(email, password);
      Alert.alert(
        "Register Success",
        "Please check your email for confirmation."
      );
      router.navigate("/login");
    } catch (error: any) {
      Alert.alert("Register Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Register</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Text
        style={{ marginTop: 15, color: "blue" }}
        onPress={() => router.navigate("/login")}
      >
        Back to Login
      </Text>
    </View>
  );
}