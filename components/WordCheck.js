import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/styles';

const correctIcon = (<Icon name="check-circle" size={30} color="#900" />);
const incorrectIcon = (<Icon name="error" size={30} color="#900" />);

const WordCheck = ({ answer, dispatch, isCorrect }) => (
  <View style={styles.row}>
    <TextInput
      placeholder="..."
      style={styles.answerBox}
      onSubmitEditing={e => dispatch({ type: 'CHECK_ANSWER', text: e.nativeEvent.text, answer })}
      // TODO: add Redux Thunk and set this action up to 'CHECK_ANSWER' and also 'REMOVE_WORD'
      // onSubmitEditing={() => dispatch({ type: 'REMOVE_REVIEW_WORD', id})}
    />
    <Text style={styles.p15}>
      {isCorrect === null ? '' : isCorrect ? correctIcon : incorrectIcon}
    </Text>
  </View>
);

const mapStateToProps = state => ({
  isCorrect: state.checkAnswer,
});

WordCheck.propTypes = {
  answer: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
};

WordCheck.defaultProps = {
  isCorrect: null,
};

export default connect(mapStateToProps)(WordCheck);
