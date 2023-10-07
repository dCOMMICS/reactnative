import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';

export default function App() {
// fonts importation//
  const[fontsLoaded] = useFonts ({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/font/medium.otf'),
    bold: require('./assets/font/bold.otf'),
    
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
