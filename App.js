import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* import { useFonts, DelaGothicOne } from '@expo-google-fonts/inter'; */

//screens
import Login from './screens/Login';
import Survey from './screens/Survey';

export const Question = React.createContext();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow',}}>
                  
    <Login />
  
   <Button style={styles.button}
        title="NEXT"
        onPress={() => navigation.navigate('Autism Questionnaire')}
        />
        <Text>        </Text>
        <Text>      </Text>
    </View>
  );
}

function QuestionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Survey/>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  const [passingage,setPassingAge] = React.useState({});
  return (  

    <Question.Provider value={[passingage,setPassingAge]}>  
    <NavigationContainer>
            <Stack.Navigator initialRouteName="Austism Questionnaire" style={{backgroundColor:'yellow'}}>
               <Stack.Screen name="        Austism Questionnaire" component={HomeScreen} />
               <Stack.Screen name="Autism Questionnaire" component={QuestionScreen} />
        
      </Stack.Navigator>

   </NavigationContainer>
   </Question.Provider>


/*     <View style={styles.container}>
      
        <Text >Autism Questionnaire</Text>
        <Button title="Alert" onPress={() => alert("Hey!!")} />
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:'200%',
    height:'100%',

  },
})
