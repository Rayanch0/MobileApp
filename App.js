import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'; 
import Routes from './routes';
import Routes2 from './routes2';

const App = () => {
  return (
    <View style={styles.container}>
     <Header/>
     
      <Routes/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});

export default App;
