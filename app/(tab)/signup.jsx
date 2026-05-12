import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Client, Account, ID, Models } from 'react-native-appwrite';
import React, { useState } from 'react';

let client;
let account;

client = new Client();
client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6a01b59a000be3753d8c')   // Your Project ID
  .setPlatform('dev.aditya.shelfie');   // Your package name / bundle identifier

account = new Account(client);
export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession({
        email,
        password
    });
    setLoggedInUser(await account.get());
  }

  async function register(email, password, name) {
    await account.create({
        userId: ID.unique(),
        email,
        password,
        name
    });
    await login(email, password);
    setLoggedInUser(await account.get());
  }
  return (
    // ... Implement your UI here
    <View style={styles.root}>
    <Text>
    {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
    </Text>
    <View>
    <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
    />
    <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
    />
    <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
    />

    <TouchableOpacity
        style={styles.button}
        onPress={() => login(email, password)}
    >
        <Text>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={()=> register(email, password, name)}
    >
        <Text>Register</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={async () => {
        await account.deleteSession({ sessionId: 'current' });
        setLoggedInUser(null);
        }}
    >
        <Text>Logout</Text>
    </TouchableOpacity>
    </View>
</View>

  );
}

const styles = StyleSheet.create({
    // ... define some styles
});

