import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';


const App= () => {
  return (
    <SafeAreaView style={styles.root}>
     <SignUpScreen> </SignUpScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
  backgroundColor:'#F9FBFC',
  flex:1,
 }
});

export default App;
