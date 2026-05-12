import { StatusBar, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const { user } = useUser();
  console.log(user)

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        animation: "none"
      }}
      
    >
        <Stack.Screen name="login" options={{title:"Login"}}></Stack.Screen>
        <Stack.Screen name="register" options={{title:"Register"}}></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;
