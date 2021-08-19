import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import LoginView from './views/auth/login/LoginView';

export default function App() {
  function onPressLearnMore() {}


  return (
    <NativeBaseProvider>
      <LoginView />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
