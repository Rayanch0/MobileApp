import React from 'react';
import { View, Text,ImageBackground, StyleSheet } from 'react-native';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import Routes2 from './routes2';
const Header = () => {
  return (
    
    <ImageBackground source={require('./banniere_Tout_savoir_sur_le_cerisier_a_fleurs4.png')} style={styles.header}>
       <View style={styles.headerText}>
       
        <Text style={styles.headerText}>ArtApp!</Text>
      </View>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    
    paddingLeft: 50,
    padding: 10,
  },
  headerText: {
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    fontSize: 20,
    marginRight:120,
    borderRadius:20,
    fontWeight: 'bold',
    color: 'black', // Couleur du texte
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Header;