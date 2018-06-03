import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const correctIcon = (<Icon name="check-circle" size={30} color="#900" />);
const incorrectIcon = (<Icon name="error" size={30} color="#900" />);

const WordCheck = ( { answer, dispatch, isCorrect } ) => (
  <View style={styles.row}>
    <TextInput 
      placeholder="..." 
      style={styles.answerBox}
      onSubmitEditing={(e) => dispatch({ type: 'CHECK_ANSWER', text: e.nativeEvent.text, answer: answer})}
    />
    <Text style={styles.p15}>
      {isCorrect === null ? ' ' : isCorrect ? correctIcon : incorrectIcon}
    </Text>
  </View>
);

const mapStateToProps = (state, props) => ({
  isCorrect: state.checkAnswer
})

export default connect(mapStateToProps)(WordCheck);
