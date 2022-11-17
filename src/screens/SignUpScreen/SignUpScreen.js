import { View, Text,StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/CustomInput'  
import CustomButton from '../../components/CustomButton'

const SignUpScreen = () => {
 const [username, setUsername]=useState('');
 const[email, setEmail]=useState('');
 const [password, setPassword]=useState('');
 const [passwordRepeat, setPasswordRepeat]=useState('');


const onRegisterPressed = () => {
  console.warn("Register");
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
     <Text style={styles.title} >Create an account </Text>
     <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
     <CustomInput placeholder="Email" value={email} setValue={setEmail} />
     <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
     <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
     <CustomButton text="Register" onPress={onRegisterPressed} type="PRIMARY"/>
     <Text style={styles.link}>Privacy policy </Text>
     <CustomButton text="Sign In with Facebook " onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
     <CustomButton text="Sign In Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
     <CustomButton text="Sign In Apple" onPress={onSignInApple} bgColor="#e3e3e3" fgColor="#363636" />

     <CustomButton text="Dont have account ? Create one" onPress={onSignUpPressed} type="TERTIARY"/>
      <CustomButton></CustomButton>
    </View>
    </ScrollView>
  )
};
const styles=StyleSheet.create({
  root:{
     alignItems:'center',
    padding:20,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,
  },
  link:{
    color:'#FDB075'
  }
});

export default SignUpScreen