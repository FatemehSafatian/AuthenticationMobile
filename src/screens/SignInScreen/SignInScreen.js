import { View, Text,Image,StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/images/logo.jpg'
import CustomInput from '../../components/CustomInput'  
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
 const [username, setUsername]=useState('');
 const [password, setPassword]=useState('');

  const {height}=useWindowDimensions();
  
const onSignInPressed = () => {
  console.warn("Sign In");
}

const onForgotPasswordPressed = () => {
  console.warn("onForgotPasswordPressed");
}

const onSignInFacebook = () => {
  console.warn("onSignInFacebook");
}
const onSignInGoogle = () => {
  console.warn("onSignInGoogle");
}
const onSignInApple = () => {
  console.warn("onSignInApple");
}

const onSignUpPressed = () => {
  console.warn("onSignUpPressed");
}




    return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={logo} style={[styles.logo, {height:height * 0.3 }]} resizeMode="contain"  />
     <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
     <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
     <CustomButton text="Sign In" onPress={onSignInPressed} type="PRIMARY"/>
     <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

     <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
     <CustomButton text="Sign In Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
     <CustomButton text="Sign In Apple" onPress={onSignInApple} bgColor="#e3e3e3" fgColor="#363636" />

     <CustomButton text="Dont have account ? Create one" onPress={onSignUpPressed} type="TERTIARY"/>

    </View>
    </ScrollView>
  )
};
const styles=StyleSheet.create({
  root:{
     alignItems:'center',
    padding:20,
  },
  logo:{
    width:'70%',
    height:100,
    maxWidth:300,
    maxHeight:200,
  }
});

export default SignInScreen