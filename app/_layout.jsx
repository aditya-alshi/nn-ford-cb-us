import { StatusBar, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import UserProvider from "../context/UserProvider";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >

        <Stack.Screen name="index" options={{ title: "Home" }} />

        {/* For auth */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      

        {/* For dashboard */}
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>

      
    </UserProvider>
  );
};

export default RootLayout;

