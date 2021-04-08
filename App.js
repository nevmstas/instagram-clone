import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./components/auth/Landing";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyBNFGnHDmALa1JIdNrX9VDYo8ivPKVWfxI",
  authDomain: "instagram-dev-539bc.firebaseapp.com",
  projectId: "instagram-dev-539bc",
  storageBucket: "instagram-dev-539bc.appspot.com",
  messagingSenderId: "467842103391",
  appId: "1:467842103391:web:da4668e2b20bad5d7c83ea",
  measurementId: "G-FS54WNM2J7",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
