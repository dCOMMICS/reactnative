import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
// fonts importation//
  const[fontsLoaded] = useFonts ({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/font/medium.otf'),
    bold: require('./assets/font/bold.otf'),
    
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
      await  Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (! fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   textStyle:{
//     fontFamily: " bold sans-serif",
//     fontSize: 26

//   }

// });
