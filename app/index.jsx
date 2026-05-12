import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/img/logo_light.png";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedLogo style={styles.img} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>

      <Spacer height={30} />
      <Link href="/login">
        <ThemedText>Login</ThemedText>
      </Link>

      <Spacer height={50} />
      <Link href="/register">
        <ThemedText>Register</ThemedText>
      </Link>

      <Spacer height={50} />
      <Link href="/profile">
        <ThemedText>This is a profile page</ThemedText>
      </Link>

      <Spacer height={50} />
      <Link href="/signup">
        <ThemedText>Sample Sign up</ThemedText>
      </Link>

    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
