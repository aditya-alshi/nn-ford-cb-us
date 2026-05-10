import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

// Themed Component

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Login = () => {

    const handlePress = ()=> {
        console.log("Login was pressed")
    }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your Account
      </ThemedText>

      <ThemedButton onPress={handlePress}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="register">
        <ThemedText style={{ textAlign: "center" }}>
          Register Instead
        </ThemedText>
      </Link>

    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
