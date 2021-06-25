import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Button, ScrollView  } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Question } from '../App';

const Survey = () => {
    const [ans1,setAns1] = React.useState('');
    const [ans2,setAns2] = React.useState('');
    const [ans3,setAns3] = React.useState('');
    const [ans4,setAns4] = React.useState('');
    const [ans5,setAns5] = React.useState('');
    const [ans6,setAns6] = React.useState('');
    const [ans7,setAns7] = React.useState('');
    const [ans8,setAns8] = React.useState('');
    const [ans9,setAns9] = React.useState('');
    const [ans10,setAns10] = React.useState('');
    const [passingage,setPassingAge] = React.useContext(Question);
    console.log(passingage);


return (
    <SafeAreaView>
    <ScrollView style={{backgroundColor:'pink'}}>
    {
          passingage === 'underfour'?
          <View>
          <Text>Questionnaire for Age Group 1-4 yrs</Text>
        <View>
        <Text>1)Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns1(newValue)} value={ans1}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>2) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns2(newValue)} value={ans2}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>3) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns3(newValue)} value={ans3}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>4) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns4(newValue)} value={ans4}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>5) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns5(newValue)} value={ans5}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>6) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns6(newValue)} value={ans6}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>7) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns7(newValue)} value={ans7}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>8) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns8(newValue)} value={ans8}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>9) Does the child look at you when you call his/her name? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns9(newValue)} value={ans9}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>10) Does the child keeps quite when he/she is sad? *</Text>
        <RadioButton.Group onValueChange={newValue => setAns10(newValue)} value={ans10}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
      </View>
          :
      <View>
        
        <View>
        <Text>Questionnaire for Age Group 4-11 yrs</Text>
        <Text>1) The child often notices small sounds when others do not *</Text>
        <RadioButton.Group onValueChange={newValue => setAns1(newValue)} value={ans1}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>2) The child usually concentrates more on the whole picture than the small details *</Text>
        <RadioButton.Group onValueChange={newValue => setAns2(newValue)} value={ans2}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>3) In a social group , the child can easily keep track of several different people's conversations *</Text>
        <RadioButton.Group onValueChange={newValue => setAns3(newValue)} value={ans3}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>4) The child finds its easy to go back and forth between activities *</Text>
        <RadioButton.Group onValueChange={newValue => setAns4(newValue)} value={ans4}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>5) The child doesn't know how to keep a conversation going with his/her peers *</Text>
        <RadioButton.Group onValueChange={newValue => setAns5(newValue)} value={ans5}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>6) The child is good at social chit-chat *</Text>
        <RadioButton.Group onValueChange={newValue => setAns6(newValue)} value={ans6}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>7) When the child is reading a story, s/he finds it difficult to work out the characters intentions or feelings *</Text>
        <RadioButton.Group onValueChange={newValue => setAns7(newValue)} value={ans7}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>8) When the child was in pre-school, s/he used to enjoy playing games involving pretending with other children *</Text>
        <RadioButton.Group onValueChange={newValue => setAns8(newValue)} value={ans8}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>9) The child finds it easy to work out what someone is thinking or feeling just by looking at their face *</Text>
        <RadioButton.Group onValueChange={newValue => setAns9(newValue)} value={ans9}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
        <View>
        <Text>10) The child finds it hard to make new friends *</Text>
        <RadioButton.Group onValueChange={newValue => setAns10(newValue)} value={ans10}>
              <View style={styles.container}>
                    <RadioButton value="Definitely Agree" />
                    <Text style={styles.text}>Definitely Agree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Slightly Agree" />
                    <Text style={styles.text}>Slightly Agree</Text>
              </View>    
              <View style={styles.container}>
                    <RadioButton value="Slightly Disagree" />
                    <Text style={styles.text}>Slightly Disagree</Text> 
              </View>
              <View style={styles.container}>
                    <RadioButton value="Definitely Disagree" />
                    <Text style={styles.text}>Definitely Disagree</Text> 
              </View>
          </RadioButton.Group>
        </View>
      </View>
    }
        <View>
            <Button title="SAVE" style={styles.button}/>
            <Text>

            </Text>
        </View>
    </ScrollView>
    
    </SafeAreaView>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:250,
  },
  text: {
    padding:10,
    width: '200%',
    height: 40,
  },
  button: {
    width:'5px',
    height:'100%',

  },
});

export default Survey;