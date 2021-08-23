import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { Container } from './Styled';

export default function App() {
  return (
    <Container>
      <StatusBar
        hidden
      ></StatusBar>
      <Home/>
    </Container>
  );
}


