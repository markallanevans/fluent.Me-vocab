import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';

// this needs to be put into store.js as an action and a reducer

let check;

// const checkWord = (text, answer) => {
//   console.log(`check: ${text}, answer: ${answer}`);
//  (text === answer ) ? check = 'YES!' : check = 'NO!';
//  console.log(check);
//  return check
// }

//works in console log but this now needs either to be put into state or put in redux.
//works... now need to pass this to state.

const WordCheck = ( { answer, dispatch, isCorrect } ) => (
  <View style={{flexDirection: 'row'}}>
    <TextInput 
      placeholder="..." 
      style={styles.answerBox}
      // onChangeText={(text) => checkWord(text.toLowerCase().trim(), answer)}
      // onSubmitEditing={(e) => checkWord(e.nativeEvent.text.toLowerCase().trim(), answer)}
      onSubmitEditing={(e) => dispatch({ type: 'CHECK_ANSWER', text: e.nativeEvent.text, answer: answer})}
    />
   {/* something here like on SubmitEditing change check answer... */}
    <Text>Answer: {isCorrect === null ? ' ' : isCorrect ? 'YES!' : 'NO!'}</Text>
  </View>
);

const mapStateToProps = (state, props) => ({
  isCorrect: state.checkAnswer
})

export default connect(mapStateToProps)(WordCheck);
