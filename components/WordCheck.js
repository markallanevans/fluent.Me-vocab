import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/styles';

const correctIcon = (<Icon name="check-circle" size={30} color="#900" />);
const incorrectIcon = (<Icon name="error" size={30} color="#900" />);

const WordCheck = ({ word, checkAnswer, isCorrect }) => {
  let answerStatusIcon = '';
  if (isCorrect === true) {
    answerStatusIcon = correctIcon;
  } else if (isCorrect === false) {
    answerStatusIcon = incorrectIcon;
  }


  return (
    <View style={styles.row}>
      <TextInput
        placeholder="..."
        style={styles.answerBox}
        onSubmitEditing={e => checkAnswer(e.nativeEvent.text, word.English)}
        // TODO: add Redux Thunk and set this action up to 'CHECK_ANSWER' and also 'REMOVE_WORD'
        // onSubmitEditing={() => dispatch({ type: 'REMOVE_REVIEW_WORD', id})}
      />
      <Text style={styles.p15}>
        {answerStatusIcon}
      </Text>
    </View>
  );
};

// const mapStateToProps = state => ({
//   isCorrect: state.checkAnswer,
// });

WordCheck.propTypes = {
  word: PropTypes.object.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
};

WordCheck.defaultProps = {
  isCorrect: null,
};

export default WordCheck;
