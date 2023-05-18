
import React from 'react';
import { SafeAreaView, useColorScheme, StatusBar, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from "./src/Navigation/index";


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, flex: 1,

  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router isAuthenticated={true} />

    </SafeAreaView>
  );
};



export default App;
