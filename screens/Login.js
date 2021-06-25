
import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, TextInput, View ,Button ,ScrollView} from "react-native";
import { RadioButton, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Image from '../assets/Images/uu.jpg';
import { select } from "async";
import { Question } from "../App";

  const Login = () => {
  const [age, setAGE] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [name, onChangeText] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  console.log(age);

  //passing age
  const [passingage,setPassingAge] = React.useContext(Question);
  setPassingAge(age)


  return (
      <SafeAreaView>
            <ScrollView>
            {/* <ImageBackground source={Image} style={styles.image}> */}
    <View style={styles.start}>
        <Text>This is a Research Project on Detection and Analysis of Autism Spectrum Disorder. 
              The information and data filled by you is strictly confidential and used solely for the purpose of our project only. Your information will not be published anywhere. Your time and consideration will be of great help towards this project.
              Please fill the information accurately. 
        </Text>
        <Text>
            The name and photo associated with your Google account will be recorded when you upload files and submit this form.
        </Text>
    </View>

      <View>
      <Text style={styles.label}>Email*</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
       
      />
      </View>
      <View>
        <Text style={styles.label}>Please provide name of the child*</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
        placeholder="Name of child"
      />
      </View>
      <View>
          <Text style={styles.label}>Please provide the Age of the Child *</Text>
            <RadioButton.Group onValueChange={newValue => setAGE(newValue)} value={age}>
                <View style={styles.container}>
                <RadioButton value="underfour" />
                    <Text style={styles.text}>1-4 Years</Text> 
                        
                </View>
                <View style={styles.container}>
                <RadioButton  value="abovefour" />
                    <Text style={styles.text}>4-11 Years</Text>
                </View>
            </RadioButton.Group>
      </View>
      <View>
        <Text style={styles.label}>Please select the Gender of the Child *</Text>
          <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
              <View style={styles.container}>
                    <RadioButton value="male" />
                    <Text style={styles.text}>Male</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="female" />
                    <Text style={styles.text}>Female</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="other" />
                    <Text style={styles.text}>Other</Text> 
              </View>
          </RadioButton.Group>
      </View>
      {/* </ImageBackground> */}
      </ScrollView>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    label:{
        margin: 5,
    },
  input: {
    height: 40,
    width:340,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:250,
  },
  text: {
    padding:10,
    width: '100%',
    height: 40,
  },
  start: {
    padding:35,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Login;

