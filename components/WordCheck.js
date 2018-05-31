import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles';

// this needs to be put into store.js as an action and a reducer

let check;

const checkWord = (text, answer) => {
  console.log(`check: ${text}, answer: ${answer}`);
 (text === answer ) ? check = 'correct!' : check = 'wrong!';
 return check
}

//works in console log but this now needs either to be put into state or put in redux.

export default WordCheck = ( { answer } ) => (
  <View>
    <TextInput 
      placeholder="..." 
      style={styles.answerBox}
      onChangeText={(text) => checkWord(text.toLowerCase().trim(), answer)}
    />
   {/* something here like on SubmitEditing change check answer... */}
    <Text>Answer: {check}</Text>
  </View>
);
