import { getCurrentUser, signOut } from "@/utils/auth";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
// import { getCurrentUser } from "../utils/authService";

export default function Profile() {
  const [user, setUser] = useState<{ email?: string } | null>(null);

  const checkUser = async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  };

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {user ? (
        <View>
          <Text>Welcome, {user.email}</Text>
          {/* logout button */}
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <View>
          <Text>User not logged in</Text>
          <Link href="/login">Login</Link>
          <Button title="login" onPress={ ()=> router.navigate("/login") } />
        </View>
      )}
    </View>
  );
}