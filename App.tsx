/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';







const App=()=> {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 const [display,setDisplay]= useState(false);

 const resetFormData =()=>{
  setDisplay(false);
  setEmail("");
  setName("");
  setPassword("")
 }

  return (
    <View >
      <Text style={{fontSize:30,padding:10,margin:10,textAlign:'center'}}>
        Form
      </Text>
     
      {/* For name Fieled  */}
      <TextInput
      style={style.textInput}
      placeholder='Enter User name'
      onChangeText={(text)=>setName(text)}
      value={name}
      ></TextInput>

     {/* For Email Fieled  */}
<TextInput
      style={style.textInput}
      placeholder='Enter email'
      onChangeText={(text)=>setEmail(text)}
      value={email}
      ></TextInput>
      
      {/* For Password Fieled  */}
<TextInput
      style={style.textInput}
      placeholder='Enter Password'
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={password}
      ></TextInput>

     <View style={{margin:20}}>
     <Button color = 'green' title='Print details' 
     onPress={()=>setDisplay(true)} />
     </View>
     <View style={{margin:20}}>
     <Button  color = 'red' title='Clear details'
     onPress={resetFormData}  />
     </View>

     <View>
      {
        display ?
        <View>
        <Text style ={{fontSize:20}}>User name:-{name}</Text>
      <Text style ={{fontSize:20}}>User email:-{email}</Text>
      <Text style ={{fontSize:20}}>User password:-{password}</Text>
      </View>
      : null
      }
      
     </View>

    </View>
  );
};

const style = StyleSheet.create({
  textInput:{
       fontSize:15,
       color:'white',
       borderWidth:2,
       borderColor:'black',
       margin:10
  }
})


export default App;
