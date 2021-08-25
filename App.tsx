import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { Container } from "./Styled";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar hidden></StatusBar>
        <Home />
      </Container>
    </Provider>
  );
}
